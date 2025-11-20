// lib/plansApi.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export interface Plan {
  _id?: string
  name: string
  price: number
  billingCycle: string

  __v?: number // <-- FIXED

  title?: string
  features: string[]
  status?: 'active' | 'inactive' | 'draft'
  emailNotifications?: boolean
  searchLimit?: number
  favoritesEnabled?: boolean
  totalSubscribers?: number
  createdAt?: string
  updatedAt?: string
}

export interface PlansListResponse {
  status: boolean
  message: string
  data: {
    items: Plan[]
    pagination: {
      page: number
      limit: number
      total: number
      pages: number
    }
  }
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1'

// ---------- GET LIST ----------
export const useGetPlans = (accessToken: string, page = 1, limit = 10) => {
  return useQuery<PlansListResponse>({
    queryKey: ['plans', page, limit],
    queryFn: async () => {
      const res = await fetch(
        `${API_BASE_URL}/plan?page=${page}&limit=${limit}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      if (!res.ok) throw new Error('Failed to fetch plans')
      return res.json()
    },
    enabled: !!accessToken,
  })
}

// ---------- GET SINGLE ----------
export const useGetPlan = (planId: string | null, accessToken: string) => {
  return useQuery<{ status: boolean; message: string; data: Plan }>({
    queryKey: ['plan', planId],
    queryFn: async () => {
      const res = await fetch(`${API_BASE_URL}/plan/${planId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      if (!res.ok) throw new Error('Failed to fetch plan')
      return res.json()
    },
    enabled: !!accessToken && !!planId,
  })
}

// ---------- CREATE ----------
export const useCreatePlan = (accessToken: string) => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: async (payload: Plan) => {
      const res = await fetch(`${API_BASE_URL}/plan`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to create plan')
      return res.json()
    },
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ['plans'],
      })
    },
  })
}

// ---------- UPDATE ----------
export const useUpdatePlan = (accessToken: string) => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: async ({
      planId,
      payload,
    }: {
      planId: string
      payload: Plan
    }) => {
      const res = await fetch(`${API_BASE_URL}/plan/${planId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to update plan')
      return res.json()
    },
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ['plans'],
      })
    },
  })
}

// ---------- DELETE ----------
export const useDeletePlan = (accessToken: string) => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: async (planId: string) => {
      const res = await fetch(`${API_BASE_URL}/plan/${planId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      if (!res.ok) throw new Error('Failed to delete plan')
      return res.json()
    },
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ['plans'],
      })
    },
  })
}
