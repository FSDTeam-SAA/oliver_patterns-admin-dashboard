// ==================== FILE: lib/contactApi.ts ====================

import {
  useQuery,
  useMutation,
  useQueryClient,
  UseMutationOptions,
} from '@tanstack/react-query'
import {
  ContactsResponse,
  SingleContactResponse,
  DeleteContactResponse,
} from '@/../types/contact'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

// Fetch all contacts with pagination
export const useGetContacts = (
  accessToken: string,
  page: number = 1,
  limit: number = 10
) => {
  return useQuery<ContactsResponse>({
    queryKey: ['contacts', page, limit],
    queryFn: async () => {
      const response = await fetch(
        `${API_BASE_URL}/contact?page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      if (!response.ok) throw new Error('Failed to fetch contacts')
      return response.json()
    },
    enabled: !!accessToken,
    staleTime: 0,
    refetchOnMount: true,
  })
}

// Fetch single contact
export const useGetSingleContact = (contactId: string, accessToken: string) => {
  return useQuery<SingleContactResponse>({
    queryKey: ['contact', contactId],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/contact/${contactId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      if (!response.ok) throw new Error('Failed to fetch contact')
      return response.json()
    },
    enabled: !!accessToken && !!contactId,
  })
}

// Delete contact
export const useDeleteContact = (
  accessToken: string,
  options?: UseMutationOptions<
    DeleteContactResponse,
    Error,
    string,
    { previousContacts: [readonly unknown[], ContactsResponse | undefined][] }
  >
) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (contactId: string) => {
      const response = await fetch(`${API_BASE_URL}/contact/${contactId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      if (!response.ok) throw new Error('Failed to delete contact')
      return response.json()
    },

    // FIXED: Typed onMutate return
    onMutate: async (
      contactId: string
    ): Promise<{
      previousContacts: [readonly unknown[], ContactsResponse | undefined][]
    }> => {
      await queryClient.cancelQueries({ queryKey: ['contacts'] })

      const previousContacts =
        queryClient.getQueriesData<ContactsResponse>({
          queryKey: ['contacts'],
        }) || []

      queryClient.setQueriesData<ContactsResponse>(
        { queryKey: ['contacts'] },
        (old) => {
          if (!old) return old
          return {
            ...old,
            data: {
              ...old.data,
              items: old.data.items.filter(
                (contact) => contact._id !== contactId
              ),
              paginationInfo: {
                ...old.data.paginationInfo,
                totalData: old.data.paginationInfo.totalData - 1,
              },
            },
          }
        }
      )

      return { previousContacts }
    },

    onError: (err, contactId, context) => {
      if (context?.previousContacts) {
        context.previousContacts.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data)
        })
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
    },

    ...options,
  })
}

// Update contact status
export const useUpdateContactStatus = (
  accessToken: string,
  options?: UseMutationOptions<
    SingleContactResponse,
    Error,
    { contactId: string; status: 'new' | 'read' | 'unread' },
    {
      previousContacts: [readonly unknown[], ContactsResponse | undefined][]
      previousContact: SingleContactResponse | undefined
    }
  >
) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      contactId,
      status,
    }: {
      contactId: string
      status: 'new' | 'read' | 'unread'
    }) => {
      const response = await fetch(`${API_BASE_URL}/contact/${contactId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })
      if (!response.ok) throw new Error('Failed to update contact status')
      return response.json()
    },

    // FIXED: Explicit return type
    onMutate: async ({
      contactId,
      status,
    }): Promise<{
      previousContacts: [readonly unknown[], ContactsResponse | undefined][]
      previousContact: SingleContactResponse | undefined
    }> => {
      await queryClient.cancelQueries({ queryKey: ['contacts'] })
      await queryClient.cancelQueries({ queryKey: ['contact', contactId] })

      const previousContacts =
        queryClient.getQueriesData<ContactsResponse>({
          queryKey: ['contacts'],
        }) || []

      const previousContact = queryClient.getQueryData<SingleContactResponse>([
        'contact',
        contactId,
      ])

      queryClient.setQueriesData<ContactsResponse>(
        { queryKey: ['contacts'] },
        (old) => {
          if (!old) return old
          return {
            ...old,
            data: {
              ...old.data,
              items: old.data.items.map((contact) =>
                contact._id === contactId ? { ...contact, status } : contact
              ),
            },
          }
        }
      )

      if (previousContact) {
        queryClient.setQueryData(['contact', contactId], {
          ...previousContact,
          data: {
            contact: {
              ...previousContact.data.contact,
              status,
            },
          },
        })
      }

      return { previousContacts, previousContact }
    },

    onError: (err, variables, context) => {
      if (context?.previousContacts) {
        context.previousContacts.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data)
        })
      }
      if (context?.previousContact) {
        queryClient.setQueryData(
          ['contact', variables.contactId],
          context.previousContact
        )
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
      queryClient.invalidateQueries({ queryKey: ['contact'] })
    },

    ...options,
  })
}
