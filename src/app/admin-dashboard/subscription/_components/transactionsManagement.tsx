// components/transactions/TransactionManagement.tsx
'use client'

import React, { useState } from 'react'
import { CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import {
  useGetRecentTransactions,
  useGetTransactionDetails,
} from '@/lib/transactionApi'
import TransactionTable from './transactionTable'
import TransactionDetailsDialog from './transactionDetailsDialog'
import Link from 'next/link'

export default function TransactionManagement() {
  const [page, setPage] = useState(1)
  const [selectedTransactionId, setSelectedTransactionId] = useState<
    string | null
  >(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const session = useSession()
  const accessToken = session?.data?.user?.accessToken || ''

  const { data, isLoading } = useGetRecentTransactions(accessToken)
  const { data: detailsData, isLoading: isLoadingDetails } =
    useGetTransactionDetails(selectedTransactionId, accessToken)

  const transactions = data?.data || []

  // For demo pagination (API doesn't provide pagination info)
  const itemsPerPage = 10
  const totalItems = transactions.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIdx = (page - 1) * itemsPerPage
  const endIdx = startIdx + itemsPerPage
  const paginatedTransactions = transactions.slice(startIdx, endIdx)

  const handleView = (transactionId: string) => {
    setSelectedTransactionId(transactionId)
    setIsDetailsOpen(true)
  }

  const handleDetailsClose = (open: boolean) => {
    setIsDetailsOpen(open)
    if (!open) {
      setSelectedTransactionId(null)
    }
  }

  return (
    <div className="bg-gray-50">
      <div className="w-full mx-auto py-6">
        {/* <div className="flex items-center justify-between mb-4 px-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Recent Transactions
          </h1>
        </div> */}

        <div>
          <CardContent className="p-4">
            <div className="mb-6">
              <div className="flex gap-4">
                <Link href={'/admin-dashboard/subscription/pricing-plan'}>
                  <Button className="px-4 py-2 border bg-white text-gray-700 border-gray-700 hover:bg-slate-100 rounded cursor-pointer">
                    Pricing Plans
                  </Button>
                </Link>
                {/*  */}
                <Link
                  href={'/admin-dashboard/subscription/recent-transactions'}
                >
                  <Button className="px-6 py-2 bg-[#0C2661] hover:bg-[#0c2661]/90 text-white rounded cursor-pointer">
                    Recent Transactions
                  </Button>
                </Link>
              </div>
            </div>

            <TransactionTable
              transactions={paginatedTransactions}
              onView={handleView}
              isLoading={isLoading}
              currentPage={page}
              totalPages={totalPages}
              totalData={totalItems}
              onPageChange={(p) => setPage(p)}
            />
          </CardContent>
        </div>
      </div>

      <TransactionDetailsDialog
        open={isDetailsOpen}
        onOpenChange={handleDetailsClose}
        details={detailsData?.data || null}
        isLoading={isLoadingDetails}
      />
    </div>
  )
}
