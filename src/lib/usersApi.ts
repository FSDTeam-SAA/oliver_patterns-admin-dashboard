// ==================== FILE: lib/userApi.ts ====================

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

// Types
export interface Address {
  country: string
  cityState: string
  roadArea: string
  postalCode: string
  taxId: string
}

export interface User {
  _id: string
  name: string
  email: string
  dob: string | null
  gender: string | null
  role: 'ADMIN' | 'USER'
  wishlist: string[]
  stripeAccountId: string | null
  bio: string
  profileImage: string
  multiProfileImage: string[]
  pdfFile: string
  otp: string | null
  otpExpires: string | null
  otpVerified: boolean
  resetExpires: string | null
  isVerified: boolean
  refreshToken: string
  hasActiveSubscription: boolean
  subscriptionExpireDate: string | null
  blockedUsers: string[]
  language: string
  address: Address
  isActive: boolean
  username?: string
}

export interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalData: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export interface UsersResponse {
  status: boolean
  message: string
  data: {
    users: User[]
    paginationInfo: PaginationInfo
  }
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

// Fetch all users with pagination
export const useGetUsers = (
  accessToken: string,
  page: number = 1,
  limit: number = 10
) => {
  return useQuery<UsersResponse>({
    queryKey: ['users', page, limit],
    queryFn: async () => {
      const response = await fetch(
        `${API_BASE_URL}/user/all-users?page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      if (!response.ok) throw new Error('Failed to fetch users')
      return response.json()
    },
    enabled: !!accessToken,
  })
}

// Fetch single user by ID
export const useGetSingleUser = (userId: string, accessToken: string) => {
  return useQuery<{ user: User }>({
    queryKey: ['user', userId],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      if (!response.ok) throw new Error('Failed to fetch user')
      return response.json()
    },
    enabled: !!accessToken && !!userId,
  })
}

// Add new user
export const useAddUser = (accessToken: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: Partial<User>) => {
      const response = await fetch(`${API_BASE_URL}/user`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error('Failed to add user')
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}

// Update user
export const useUpdateUser = (accessToken: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      userId,
      data,
    }: {
      userId: string
      data: Partial<User>
    }) => {
      const response = await fetch(`${API_BASE_URL}/user/${userId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error('Failed to update user')
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}

// Delete user
export const useDeleteUser = (accessToken: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (userId: string) => {
      const response = await fetch(`${API_BASE_URL}/user/${userId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      if (!response.ok) throw new Error('Failed to delete user')
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}

// Update user status
export const useUpdateUserStatus = (accessToken: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      userId,
      status,
    }: {
      userId: string
      status: 'Active' | 'Inactive'
    }) => {
      const response = await fetch(`${API_BASE_URL}/user/${userId}/status`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })
      if (!response.ok) throw new Error('Failed to update user status')
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}
