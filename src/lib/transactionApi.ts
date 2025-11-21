// lib/transactionApi.ts
import { useQuery } from '@tanstack/react-query'

export interface Transaction {
  _id?: string
  name: string
  hasActiveSubscription: boolean
  billingCycle: string
  price: number
  startDate: string
}

export interface TransactionDetails {
  _id: string
  name: string
  email: string
  subscription: {
    planId: string
    startDate: string
    endDate: string
  }
  hasActiveSubscription: boolean
  plan: {
    name: string
    billingCycle: string
    price: number
    title: string
    features: string[]
    status: string
    emailNotifications: boolean
    searchLimit: number
    favoritesEnabled: boolean
  }
}

export interface TransactionsResponse {
  status: boolean
  message: string
  data: Transaction[]
}

export interface TransactionDetailsResponse {
  status: boolean
  message: string
  data: TransactionDetails
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1'

// ---------- GET RECENT TRANSACTIONS ----------
export const useGetRecentTransactions = (accessToken: string) => {
  return useQuery<TransactionsResponse>({
    queryKey: ['recentTransactions'],
    queryFn: async () => {
      const res = await fetch(`${API_BASE_URL}/plan/recent-transactions`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      if (!res.ok) throw new Error('Failed to fetch recent transactions')
      return res.json()
    },
    enabled: !!accessToken,
  })
}

// ---------- GET TRANSACTION DETAILS ----------
export const useGetTransactionDetails = (
  transactionId: string | null,
  accessToken: string
) => {
  return useQuery<TransactionDetailsResponse>({
    queryKey: ['transactionDetails', transactionId],
    queryFn: async () => {
      const res = await fetch(
        `${API_BASE_URL}/plan/recent-transactions/${transactionId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      if (!res.ok) throw new Error('Failed to fetch transaction details')
      return res.json()
    },
    enabled: !!accessToken && !!transactionId,
  })
}
