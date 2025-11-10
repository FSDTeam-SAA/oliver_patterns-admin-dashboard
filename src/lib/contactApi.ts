// ==================== FILE: lib/contactApi.ts ====================
/*
import {
  useQuery,
  useMutation,
  useQueryClient,
  UseMutationOptions,
} from '@tanstack/react-query'
import { Contact, ContactsResponse } from '../../types/contact'

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
        `${API_BASE_URL}/contacts?page=${page}&limit=${limit}`,
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
  })
}

// Fetch single contact
export const useGetSingleContact = (contactId: string, accessToken: string) => {
  return useQuery<{ contact: Contact }>({
    queryKey: ['contact', contactId],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/contacts/${contactId}`, {
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
export const useDeleteContact = (accessToken: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (contactId: string) => {
      const response = await fetch(`${API_BASE_URL}/contacts/${contactId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      if (!response.ok) throw new Error('Failed to delete contact')
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
    },
  })
}

// Update contact status (respond to contact)
export const useUpdateContactStatus = (
  accessToken: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: UseMutationOptions<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    Error,
    { contactId: string; responseMessage: string }
  >
) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      contactId,
      responseMessage,
    }: {
      contactId: string
      responseMessage: string
    }) => {
      const response = await fetch(
        `${API_BASE_URL}/contacts/${contactId}/respond`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ responseMessage }),
        }
      )
      if (!response.ok) throw new Error('Failed to update contact status')
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
    },
    ...options,
  })
}
*/
