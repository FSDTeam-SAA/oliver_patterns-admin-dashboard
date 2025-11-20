// components/plans/PlanTable.tsx
'use client'

import React, { useState } from 'react'
import { Eye, Trash2, Edit } from 'lucide-react'
import { Plan } from '@/lib/planApi'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import TableSkeleton from '@/components/reusable/TableSkeleton'

interface Props {
  plans: Plan[]
  onView: (plan: Plan) => void
  onEdit: (plan: Plan) => void
  onDelete: (planId: string) => void
  isLoading?: boolean
  currentPage: number
  totalPages: number
  totalData: number
  onPageChange: (page: number) => void
}

export default function PlanTable({
  plans,
  onView,
  onEdit,
  onDelete,
  isLoading,
  currentPage,
  totalPages,
  totalData,
  onPageChange,
}: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  const openDelete = (id: string) => {
    setSelectedId(id)
    setIsDeleteOpen(true)
  }

  const confirmDelete = () => {
    if (selectedId) onDelete(selectedId)
    setSelectedId(null)
    setIsDeleteOpen(false)
  }

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
                Plan
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-600 uppercase">
                Price
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-600 uppercase">
                Billing
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-600 uppercase">
                Subscribers
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
            {plans.map((p) => (
              <tr key={p._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-3">
                  <p className="font-medium text-gray-900">{p.name}</p>
                  <p className="text-sm text-gray-500">{p.title}</p>
                </td>

                <td className="px-6 py-3 text-center">${p.price}</td>

                <td className="px-6 py-3 text-center capitalize">
                  {p.billingCycle}
                </td>

                <td className="px-6 py-3 text-center">
                  {p.totalSubscribers ?? 0}
                </td>

                <td className="px-6 py-3 text-center">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      p.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {p.status}
                  </span>
                </td>

                <td className="px-6 py-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onView(p)}
                      className="text-blue-600 hover:text-blue-800 p-1"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => onEdit(p)}
                      className="text-yellow-600 hover:text-yellow-800 p-1"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => openDelete(String(p._id))}
                      className="text-red-600 hover:text-red-800 p-1"
                    >
                      <Trash2 className="w-5 h-5" />
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

      <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              Do you want to delete this plan? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-end gap-2 mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
