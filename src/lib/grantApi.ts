// ==================== FILE: lib/grantApi.ts (API Integration Template) ====================
// This is a template for future API integration.
// Currently using demo data from demoGrants.json
/*
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Grant, GrantsResponse } from '@/../types/grant'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

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
        `${API_BASE_URL}/grants?page=${page}&limit=${limit}`,
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
  return useQuery<{ grant: Grant }>({
    queryKey: ['grant', grantId],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/grants/${grantId}`, {
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
    mutationFn: async (data: FormData) => {
      const response = await fetch(`${API_BASE_URL}/grants`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: data,
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
      data,
    }: {
      grantId: string
      data: FormData
    }) => {
      const response = await fetch(`${API_BASE_URL}/grants/${grantId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: data,
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
      const response = await fetch(`${API_BASE_URL}/grants/${grantId}`, {
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
} */
