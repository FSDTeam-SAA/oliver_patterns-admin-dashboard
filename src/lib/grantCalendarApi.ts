/* eslint-disable @typescript-eslint/no-explicit-any */
// ==================== FILE: lib/grantCalendarApi.ts ====================
import { useQuery } from '@tanstack/react-query'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com/api'

interface CalendarGrantsResponse {
  status: boolean
  message: string
  data: {
    items: any[]
    total: number
    page: number
    limit: number
  }
}

export const useGetCalendarGrants = (
  accessToken: string,
  startDate: string,
  endDate: string,
  page: number = 1,
  limit: number = 10
) => {
  return useQuery<CalendarGrantsResponse>({
    queryKey: ['calendar-grants', startDate, endDate, page, limit],
    queryFn: async () => {
      const response = await fetch(
        `${API_BASE_URL}/grant?startDate=${startDate}&endDate=${endDate}&page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      if (!response.ok) throw new Error('Failed to fetch grants')
      return response.json()
    },
    enabled: !!accessToken && !!startDate && !!endDate,
  })
}
