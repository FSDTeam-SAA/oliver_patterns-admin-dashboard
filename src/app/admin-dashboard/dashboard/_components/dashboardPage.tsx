// components/dashboard/DashboardPage.tsx
'use client'

import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import {
  useGetDashboardOverview,
  useGetDashboardGrowth,
} from '@/lib/dashboardApi'
import StatsCards from './statsCards'
import DashboardCharts from './dashboardCharts'
import RecentGrantsTable from './recentGrantsTable'
import RecentSubscribersTable from './recentSubscriberTable'

export default function DashboardPage() {
  const currentYear = new Date().getFullYear()
  const [selectedYear, setSelectedYear] = useState(currentYear)

  const session = useSession()
  const accessToken = session?.data?.user?.accessToken || ''

  // Fetch overview data
  const { data: overviewData, isLoading: overviewLoading } =
    useGetDashboardOverview(accessToken)

  // Fetch growth data
  const { data: growthData, isLoading: growthLoading } = useGetDashboardGrowth(
    accessToken,
    selectedYear
  )

  const overview = overviewData?.data
  const growth = growthData?.data || []

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-full px-5 mx-auto pb-8">
        {/* Header */}
        {/* <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here&apos;s what&apos;s happening today.
          </p>
        </div> */}

        {/* Stats Cards */}
        <StatsCards
          totalUsers={overview?.totalUsers || 0}
          totalGrants={overview?.totalGrants || 0}
          totalRevenue={overview?.totalRevenue || 0}
          activeSubscriptions={overview?.activeSubscriptions || 0}
          isLoading={overviewLoading}
        />

        {/* Charts */}
        <DashboardCharts
          data={growth}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
          isLoading={growthLoading}
        />

        {/* Recent Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentGrantsTable
            grants={overview?.recentGrants || []}
            isLoading={overviewLoading}
          />
          <RecentSubscribersTable
            subscribers={overview?.recentSubscribers || []}
            isLoading={overviewLoading}
          />
        </div>
      </div>
    </div>
  )
}
