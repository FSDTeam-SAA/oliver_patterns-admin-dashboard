/* eslint-disable @typescript-eslint/no-explicit-any */
// ==================== FILE: _components/GrantTable.tsx ====================
'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Eye, Trash2, ChevronLeft, ChevronRight } from 'lucide-react'
import { format } from 'date-fns'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import Image from 'next/image'

interface GrantTableProps {
  grants: any[]
  isLoading: boolean
  currentPage: number
  totalPages: number
  totalData: number
  onPageChange: (page: number) => void
  onDelete?: (grantId: string) => void
}

export function GrantTable({
  grants,
  isLoading,
  currentPage,
  totalPages,
  totalData,
  onPageChange,
  onDelete,
}: GrantTableProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [viewingGrant, setViewingGrant] = useState<any | null>(null)

  const handleViewGrant = (grant: any) => {
    setViewingGrant(grant)
    setIsDetailsOpen(true)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-green-100 text-green-800'
      case 'upcoming':
        return 'bg-blue-100 text-blue-800'
      case 'closed':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
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

  if (isLoading) {
    return (
      <Card className="w-full p-6">
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-500 mt-2">Loading grants...</p>
        </div>
      </Card>
    )
  }

  if (grants.length === 0) {
    return (
      <Card className="w-full p-6">
        <div className="text-center py-8 text-gray-500">
          <p className="text-lg">No grants found for this period</p>
        </div>
      </Card>
    )
  }

  return (
    <>
      <Card className="w-full">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Title
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                  Type
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                  Funding
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                  Deadline
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {grants.map((grant) => (
                <tr
                  key={grant._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900 line-clamp-2">
                      {grant.title}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">
                    {grant.type}
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                    {grant.funding}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        grant.status
                      )}`}
                    >
                      {grant.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">
                    {format(new Date(grant.deadline), 'MMM dd, yyyy')}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleViewGrant(grant)}
                        className="text-blue-600 hover:text-blue-800 transition-colors p-1"
                        title="View"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      {onDelete && (
                        <button
                          onClick={() => onDelete(grant._id)}
                          className="text-red-600 hover:text-red-800 transition-colors p-1"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 0 && (
          <div className="bg-white px-6 py-4 flex items-center justify-between border-t">
            <div className="text-sm text-gray-600">
              Showing {(currentPage - 1) * 10 + 1} to{' '}
              {Math.min(currentPage * 10, totalData)} of {totalData} results
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-2 py-1 rounded border transition flex items-center ${
                  currentPage > 1
                    ? 'hover:bg-gray-100 text-gray-700'
                    : 'opacity-40 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

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

              <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-2 py-1 rounded border transition flex items-center ${
                  currentPage < totalPages
                    ? 'hover:bg-gray-100 text-gray-700'
                    : 'opacity-40 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </Card>

      {/* View Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="!w-[40vw] !max-w-[40vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              Grant Details
            </DialogTitle>
          </DialogHeader>

          {viewingGrant && (
            <div className="space-y-6 py-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {viewingGrant.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Type:</span>
                    <span className="ml-2 text-gray-600">
                      {viewingGrant.type}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">
                      Funding:
                    </span>
                    <span className="ml-2 text-gray-600">
                      {viewingGrant.funding}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">
                      Deadline:
                    </span>
                    <span className="ml-2 text-gray-600">
                      {format(new Date(viewingGrant.deadline), 'MMM dd, yyyy')}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Status:</span>
                    <span
                      className={`ml-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        viewingGrant.status
                      )}`}
                    >
                      {viewingGrant.status}
                    </span>
                  </div>
                </div>
              </div>

              {viewingGrant.location && viewingGrant.location.length > 0 && (
                <div>
                  <h4 className="font-semibold text-lg mb-2">Location</h4>
                  <div className="flex flex-wrap gap-2">
                    {viewingGrant.location.map((loc: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {viewingGrant.industry && viewingGrant.industry.length > 0 && (
                <div>
                  <h4 className="font-semibold text-lg mb-2">Industry</h4>
                  <div className="flex flex-wrap gap-2">
                    {viewingGrant.industry.map((ind: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 rounded-full text-sm"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {viewingGrant.activity && viewingGrant.activity.length > 0 && (
                <div>
                  <h4 className="font-semibold text-lg mb-2">Activity</h4>
                  <div className="flex flex-wrap gap-2">
                    {viewingGrant.activity.map((act: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-green-100 rounded-full text-sm"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-semibold text-lg mb-2">Description</h4>
                <p className="text-gray-700 leading-relaxed">
                  {viewingGrant.description}
                </p>
              </div>

              {viewingGrant.imageUrl && (
                <div>
                  <h4 className="font-semibold text-lg mb-2">Image</h4>
                  <Image
                    src={viewingGrant.imageUrl}
                    alt={viewingGrant.title}
                    width={600}
                    height={400}
                    className="w-full max-w-md rounded-lg"
                  />
                </div>
              )}

              {(viewingGrant.fileUrl || viewingGrant.fileUrls?.length > 0) && (
                <div>
                  <h4 className="font-semibold text-lg mb-2">Attachments</h4>
                  <div className="space-y-2">
                    {viewingGrant.fileUrl && (
                      <a
                        href={viewingGrant.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block"
                      >
                        Download Document
                      </a>
                    )}
                    {viewingGrant.fileUrls?.map((url: string, i: number) => (
                      <a
                        key={i}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block"
                      >
                        Document {i + 1}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
