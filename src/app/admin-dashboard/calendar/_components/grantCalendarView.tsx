// ==================== FILE: _components/GrantCalendarView.tsx ====================
'use client'

import React, { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Card } from '@/components/ui/card'
import { format } from 'date-fns'
import { useCalendarStore } from '@/store/calendarStore'
import { DateRange } from 'react-day-picker'

interface GrantCalendarViewProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  grants: any[]
}

export function GrantCalendarView({ grants }: GrantCalendarViewProps) {
  const { setDateRange } = useCalendarStore()
  const [dateRange, setLocalDateRange] = useState<DateRange | undefined>()

  const handleDateSelect = (range: DateRange | undefined) => {
    setLocalDateRange(range)

    if (range?.from && range?.to) {
      const start = format(range.from, 'yyyy-MM-dd')
      const end = format(range.to, 'yyyy-MM-dd')
      setDateRange(start, end)
    } else if (range?.from) {
      const start = format(range.from, 'yyyy-MM-dd')
      setDateRange(start, start)
    }
  }

  const grantDates = grants.map((grant) => new Date(grant.deadline))

  return (
    <Card className="w-full p-6 shadow-sm border border-gray-200 bg-white">
      {/* <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">Calendar</h2>
      </div> */}

      <div className="w-full bg-white rounded-lg border border-gray-200 justify-center items-center flex">
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={handleDateSelect}
          numberOfMonths={1}
          className="w-full "
          classNames={{
            months: 'flex w-full',
            month: 'w-full space-y-4',
            caption: 'flex justify-between items-center px-4 py-3 border-b',
            caption_label: 'text-base font-semibold text-gray-700',

            nav: 'flex items-center gap-6 relative w-full',
            nav_button:
              'h-16 w-16 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-600 transition',
            nav_button_previous: 'absolute left-2',
            nav_button_next: 'absolute right-2',

            table: 'w-full border-collapse',
            head_row: 'grid grid-cols-7 border-b bg-gray-50',
            head_cell:
              'text font-medium text-gray-600 py-3 text-center uppercase',

            row: 'grid grid-cols-7 border-b last:border-b-0',
            cell: 'relative p-0 text-center h-16 flex items-center justify-center',

            day: 'h-8 w-16 flex my-4 mx-14 items-center justify-center text-sm font-medium cursor-pointer hover:bg-blue-50 transition-colors text-gray-700',

            day_selected:
              'bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200',
            day_range_middle: 'bg-blue-50 text-blue-700',
            day_range_start:
              'bg-blue-200 text-blue-800 font-bold hover:bg-blue-300',
            day_range_end:
              'bg-blue-200 text-blue-800 font-bold hover:bg-blue-300',
            day_today: 'border-2 border-blue-400 text-blue-700 font-bold',
            day_outside: 'opacity-30 text-gray-400 cursor-default',
            day_disabled: 'opacity-30 cursor-not-allowed',
          }}
          modifiers={{
            hasGrant: grantDates,
          }}
          modifiersStyles={{
            hasGrant: {
              backgroundColor: '#DBEAFE',
              color: '#1E40AF',
              fontWeight: 600,
            },
          }}
        />
      </div>

      {dateRange?.from && dateRange?.to && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <p className="text-sm text-sky-700">
            <span className="font-medium">Selected Range:</span>{' '}
            <span className="font-bold">
              {format(dateRange.from, 'MMM dd, yyyy')} →{' '}
              {format(dateRange.to, 'MMM dd, yyyy')}
            </span>
          </p>
        </div>
      )}
    </Card>
  )
}
