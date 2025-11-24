// lib/dashboardApi.ts
import { useQuery } from '@tanstack/react-query'

export interface GrowthData {
  month: string
  revenue: number
  userCount: number
}

export interface GrowthResponse {
  status: boolean
  message: string
  data: GrowthData[]
}

export interface RecentGrant {
  _id: string
  title: string
  funding: string
  deadline: string
}

export interface GrantDetails {
  _id: string
  title: string
  type: string
  funding: string
  deadline: string
  status: string
  location: string
  industry: string
  activity: string
  description: string
  imageUrl?: string
  fileUrls?: string[]
}

export interface RecentSubscriber {
  _id: string
  name: string
  email: string
  hasActiveSubscription: boolean
  planName: string
  planStatus: string
  subscriptionStart: string
}

export interface OverviewData {
  totalUsers: number
  totalGrants: number
  totalRevenue: number
  activeSubscriptions: number
  recentGrants: RecentGrant[]
  recentSubscribers: RecentSubscriber[]
}

export interface OverviewResponse {
  status: boolean
  message: string
  data: OverviewData
}

export interface GrantDetailsResponse {
  status: boolean
  message: string
  data: GrantDetails
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1'

// ---------- GET GROWTH DATA ----------
export const useGetDashboardGrowth = (accessToken: string, year: number) => {
  return useQuery<GrowthResponse>({
    queryKey: ['dashboardGrowth', year],
    queryFn: async () => {
      const res = await fetch(`${API_BASE_URL}/dashboard/growth?year=${year}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      if (!res.ok) throw new Error('Failed to fetch growth data')
      return res.json()
    },
    enabled: !!accessToken,
  })
}

// ---------- GET OVERVIEW DATA ----------
export const useGetDashboardOverview = (accessToken: string) => {
  return useQuery<OverviewResponse>({
    queryKey: ['dashboardOverview'],
    queryFn: async () => {
      const res = await fetch(`${API_BASE_URL}/dashboard/overview`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      if (!res.ok) throw new Error('Failed to fetch overview data')
      return res.json()
    },
    enabled: !!accessToken,
  })
}

// ---------- GET GRANT DETAILS ----------
export const useGetGrantDetails = (
  grantId: string | null,
  accessToken: string
) => {
  return useQuery<GrantDetailsResponse>({
    queryKey: ['grantDetails', grantId],
    queryFn: async () => {
      const res = await fetch(`${API_BASE_URL}/grant/${grantId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      if (!res.ok) throw new Error('Failed to fetch grant details')
      return res.json()
    },
    enabled: !!accessToken && !!grantId,
  })
}
