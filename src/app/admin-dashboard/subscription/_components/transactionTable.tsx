// components/transactions/TransactionTable.tsx
'use client'

import React from 'react'
import { Eye } from 'lucide-react'
import TableSkeleton from '@/components/reusable/TableSkeleton'

export interface Transaction {
  userId?: string
  name: string
  hasActiveSubscription: boolean
  billingCycle: string
  price: number
  startDate: string
}

interface Props {
  transactions: Transaction[]
  onView: (transactionId: string) => void
  isLoading?: boolean
  currentPage: number
  totalPages: number
  totalData: number
  onPageChange: (page: number) => void
}

export default function TransactionTable({
  transactions,
  onView,
  isLoading,
  currentPage,
  totalPages,
  totalData,
  onPageChange,
}: Props) {
  function getPageNumbers(): (number | string)[] {
    const pages: (number | string)[] = []
    const maxToShow = 5
    if (totalPages <= maxToShow) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '…', totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '…', totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(
          1,
          '…',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '…',
          totalPages
        )
      }
    }
    return pages
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  if (isLoading) {
    return (
      <div>
        <TableSkeleton />
      </div>
    )
  }

  return (
    <div className="bg-white rounded border">
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead className="bg-blue-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase">
                User Name
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-600 uppercase">
                Plan Type
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-600 uppercase">
                Price
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-600 uppercase">
                Date
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-600 uppercase">
                Status
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-600 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((t, idx) => (
              <tr key={t.userId || idx} className="hover:bg-gray-50 transition">
                <td className="px-6 py-3">
                  <p className="font-medium text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">
                    ID: {t.userId?.slice(-8) || 'N/A'}
                  </p>
                </td>

                <td className="px-6 py-3 text-center capitalize">
                  {t.billingCycle}
                </td>

                <td className="px-6 py-3 text-center">${t.price}</td>

                <td className="px-6 py-3 text-center text-sm text-gray-600">
                  {formatDate(t.startDate)}
                </td>

                <td className="px-6 py-3 text-center">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      t.hasActiveSubscription
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {t.hasActiveSubscription ? 'Complete' : 'Failed'}
                  </span>
                </td>

                <td className="px-6 py-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => t.userId && onView(t.userId)}
                      className="text-blue-600 hover:text-blue-800 p-1"
                      title="View Details"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination & footer */}
      <div className="bg-white px-8 py-4 flex items-center justify-between border-t">
        <div className="text-sm text-gray-600">
          Showing {(currentPage - 1) * 10 + 1} to{' '}
          {Math.min(currentPage * 10, totalData)} of {totalData} results
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-2 py-1 rounded border ${
              currentPage === 1
                ? 'opacity-40 cursor-not-allowed'
                : 'hover:bg-gray-100'
            }`}
          >
            Prev
          </button>

          {getPageNumbers().map((page, i) => (
            <button
              key={i}
              onClick={() => typeof page === 'number' && onPageChange(page)}
              disabled={page === '…'}
              className={`px-3 py-1 rounded text-sm font-medium min-w-[32px] ${
                page === currentPage
                  ? 'bg-[#0C2661] text-white'
                  : page === '…'
                  ? 'text-gray-400 cursor-default'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-2 py-1 rounded border ${
              currentPage === totalPages
                ? 'opacity-40 cursor-not-allowed'
                : 'hover:bg-gray-100'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
