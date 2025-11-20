/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/grantApi.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com/api'

interface GrantsResponse {
  status: boolean
  message: string
  data: {
    items: any[]
    total: number
    page: number
    limit: number
  }
}

interface SingleGrantResponse {
  status: boolean
  message: string
  data: any
}

// Fetch all grants with pagination
export const useGetGrants = (
  accessToken: string,
  page: number = 1,
  limit: number = 10
) => {
  return useQuery<GrantsResponse>({
    queryKey: ['grants', page, limit],
    queryFn: async () => {
      const response = await fetch(
        `${API_BASE_URL}/grant?page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      if (!response.ok) throw new Error('Failed to fetch grants')
      return response.json()
    },
    enabled: !!accessToken,
  })
}

// Fetch single grant
export const useGetSingleGrant = (grantId: string, accessToken: string) => {
  return useQuery<SingleGrantResponse>({
    queryKey: ['grant', grantId],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/grant/${grantId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      if (!response.ok) throw new Error('Failed to fetch grant')
      return response.json()
    },
    enabled: !!accessToken && !!grantId,
  })
}

// Add new grant
export const useAddGrant = (accessToken: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await fetch(`${API_BASE_URL}/grant`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      })
      if (!response.ok) throw new Error('Failed to add grant')
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['grants'] })
    },
  })
}

// Update grant
export const useUpdateGrant = (accessToken: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      grantId,
      formData,
    }: {
      grantId: string
      formData: FormData
    }) => {
      const response = await fetch(`${API_BASE_URL}/grant/${grantId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      })
      if (!response.ok) throw new Error('Failed to update grant')
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['grants'] })
    },
  })
}

// Delete grant
export const useDeleteGrant = (accessToken: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (grantId: string) => {
      const response = await fetch(`${API_BASE_URL}/grant/${grantId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      if (!response.ok) throw new Error('Failed to delete grant')
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['grants'] })
    },
  })
}
