// ==================== FILE: app/admin-dashboard/calendar/page.tsx ====================
'use client'

import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useGetCalendarGrants } from '@/lib/grantCalendarApi'
import { useCalendarStore } from '@/store/calendarStore'
import { GrantCalendarView } from './grantCalendarView'
import { GrantTable } from './grantTable'
import { format, startOfMonth, endOfMonth } from 'date-fns'

export default function GrantCalendar() {
  const { data: session } = useSession()
  const accessToken = session?.user?.accessToken || ''

  const { startDate, endDate, setDateRange } = useCalendarStore()
  const [currentPage, setCurrentPage] = useState(1)

  // Set default date range to current month on mount
  useEffect(() => {
    if (!startDate && !endDate) {
      const now = new Date()
      const start = format(startOfMonth(now), 'yyyy-MM-dd')
      const end = format(endOfMonth(now), 'yyyy-MM-dd')
      setDateRange(start, end)
    }
  }, [startDate, endDate, setDateRange])

  const { data, isLoading } = useGetCalendarGrants(
    accessToken,
    startDate || format(startOfMonth(new Date()), 'yyyy-MM-dd'),
    endDate || format(endOfMonth(new Date()), 'yyyy-MM-dd'),
    currentPage,
    10
  )

  const grants = data?.data.items || []
  const totalPages = Math.ceil((data?.data.total || 0) / 10)
  const totalData = data?.data.total || 0

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="p-6 space-y-6">
      {/* Calendar Section - Full Width */}
      <GrantCalendarView grants={grants} />

      {/* Table Section - Full Width */}
      <GrantTable
        grants={grants}
        isLoading={isLoading}
        currentPage={currentPage}
        totalPages={totalPages}
        totalData={totalData}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
