// ==================== FILE: app/admin-dashboard/grant-management/_components/GrantTable.tsx ====================
'use client'

import React, { useState } from 'react'
import {
  Edit,
  Trash2,
  Eye,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { Grant } from '../../../../../types/grant'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface GrantTableProps {
  grants: Grant[]
  onView: (grant: Grant) => void
  onEdit: (grant: Grant) => void
  onDelete: (grantId: string) => void
  isLoading?: boolean
  currentPage: number
  totalPages: number
  totalData: number
  hasNextPage: boolean
  hasPrevPage: boolean
  onPageChange: (page: number) => void
}

export default function GrantTable({
  grants,
  onView,
  onEdit,
  onDelete,
  isLoading,
  currentPage,
  totalPages,
  totalData,
  hasNextPage,
  hasPrevPage,
  onPageChange,
}: GrantTableProps) {
  const [selectedGrant, setSelectedGrant] = useState<Grant | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleDeleteClick = (grant: Grant) => {
    setSelectedGrant(grant)
    setIsDialogOpen(true)
  }

  const handleDeleteConfirm = () => {
    if (selectedGrant) {
      onDelete(selectedGrant._id)
      setSelectedGrant(null)
      setIsDialogOpen(false)
    }
  }

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    )
  }

  if (!grants || grants.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg">
        <p className="text-lg">No grants found</p>
        <p className="text-sm mt-1">Create your first grant to get started</p>
      </div>
    )
  }

  function getPageNumbers(): (number | string)[] {
    const pages: (number | string)[] = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 3; i++) pages.push(i)
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 2; i <= totalPages; i++) pages.push(i)
      } else {
        pages.push(1)
        pages.push('...')
        pages.push(currentPage - 1)
        pages.push(currentPage)
        pages.push(currentPage + 1)
        pages.push('...')
        pages.push(totalPages)
      }
    }
    return pages
  }

  return (
    <div className="bg-white rounded-lg border">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-blue-100 border-b ">
            <tr>
              {/* <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                No.
              </th> */}
              <th className="px-6 py-4 text-left pl-40 text-sm font-medium text-gray-500 uppercase ">
                Title
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase">
                Type
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase">
                Funding
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase">
                Deadline
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-center">
            {grants.map((grant) => (
              <tr
                key={grant._id}
                className="hover:bg-gray-50 transition-colors"
              >
                {/* Serial Number */}
                {/* <td className="px-6 py-4 text-sm text-gray-900">
                  {(currentPage - 1) * 10 + index + 1}
                </td> */}

                {/* Title */}
                <td className="px-6 py-4">
                  <div className="max-w-xs">
                    <span className="font-medium text-gray-900 line-clamp-2">
                      {grant.title}
                    </span>
                  </div>
                </td>

                {/* Type */}
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                  {grant.type}
                </td>

                {/* Funding */}
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                  {grant.funding}
                </td>

                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      grant.status === 'Open'
                        ? 'bg-green-100 text-green-800'
                        : grant.status === 'Upcoming'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {grant.status}
                  </span>
                </td>

                {/* Deadline */}
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {grant.deadline}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onView(grant)}
                      className="text-blue-600 hover:text-blue-800 transition-colors p-1 rounded cursor-pointer"
                      title="View"
                    >
                      <Eye className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => onEdit(grant)}
                      className="text-green-600 hover:text-green-800 transition-colors p-1 rounded cursor-pointer"
                      title="Edit"
                    >
                      <Edit className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => handleDeleteClick(grant)}
                      className="text-red-600 hover:text-red-800 transition-colors p-1 rounded cursor-pointer"
                      title="Delete"
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

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are You Sure?</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this Grant?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Pagination */}
      {totalPages > 0 && (
        <div className="bg-white px-12 flex items-center justify-between border-t py-4">
          {/* Showing Results */}
          <div className="text-md text-gray-600">
            Showing {(currentPage - 1) * 10 + 1} to{' '}
            {Math.min(currentPage * 10, totalData)} of {totalData} results
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center gap-2">
            {/* Previous Arrow */}
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={!hasPrevPage}
              className={`px-2 py-1 rounded border transition flex items-center ${
                hasPrevPage
                  ? 'hover:bg-gray-100 text-gray-700'
                  : 'opacity-40 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' && onPageChange(page)}
                disabled={page === '...'}
                className={`px-3 py-1 rounded text-sm font-medium min-w-[32px] ${
                  page === currentPage
                    ? 'bg-[#0C2661] text-white'
                    : page === '...'
                    ? 'text-gray-400 cursor-default'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Arrow */}
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={!hasNextPage}
              className={`px-2 py-1 rounded border transition flex items-center ${
                hasNextPage
                  ? 'hover:bg-gray-100 text-gray-700'
                  : 'opacity-40 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
