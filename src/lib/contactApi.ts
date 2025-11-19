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
    staleTime: 0, // Data immediately stale hoye jabe
    refetchOnMount: true, // Mount e refetch korbe
  })
}

// Fetch single contact
export const useGetSingleContact = (contactId: string, accessToken: string) => {
  return useQuery<SingleContactResponse>({
    queryKey: ['contact', contactId],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/contact/${contactId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
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
  options?: UseMutationOptions<DeleteContactResponse, Error, string>
) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (contactId: string) => {
      const response = await fetch(`${API_BASE_URL}/contact/${contactId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      if (!response.ok) throw new Error('Failed to delete contact')
      return response.json()
    },
    // Optimistic update - delete korar agei UI theke soria dibe
    onMutate: async (contactId) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['contacts'] })

      // Snapshot of previous value
      const previousContacts = queryClient.getQueriesData<ContactsResponse>({
        queryKey: ['contacts'],
      })

      // Optimistically update - UI theke turei remove
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
    // Error hole rollback
    onError: (err, contactId, context) => {
      if (context?.previousContacts) {
        context.previousContacts.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data)
        })
      }
    },
    // Success hole refetch kore confirm
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
    { contactId: string; status: 'new' | 'read' | 'unread' }
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
    // Optimistic update - status change agei dekhabe
    onMutate: async ({ contactId, status }) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['contacts'] })
      await queryClient.cancelQueries({ queryKey: ['contact', contactId] })

      // Snapshot of previous values
      const previousContacts = queryClient.getQueriesData<ContactsResponse>({
        queryKey: ['contacts'],
      })
      const previousContact = queryClient.getQueryData<SingleContactResponse>([
        'contact',
        contactId,
      ])

      // Optimistically update to the new status - UI te instant change
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

      // Update single contact cache o
      if (previousContact) {
        queryClient.setQueryData<SingleContactResponse>(
          ['contact', contactId],
          {
            ...previousContact,
            data: {
              contact: {
                ...previousContact.data.contact,
                status,
              },
            },
          }
        )
      }

      return { previousContacts, previousContact }
    },
    // Error hole rollback
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
    // Success hole refetch kore confirm
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
      queryClient.invalidateQueries({ queryKey: ['contact'] })
    },
    ...options,
  })
}
