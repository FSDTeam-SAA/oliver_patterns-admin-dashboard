/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import GrantTable from '../_components/grantTable'
import { useGetGrants, useDeleteGrant } from '@/lib/grantApi'
import { toast } from 'sonner'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function GrantManagement() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [viewingGrant, setViewingGrant] = useState<any | null>(null)
  const cu = useSession()

  // Get access token from localStorage or your auth context
  const accessToken = cu?.data?.user?.accessToken || ''

  // Fetch grants using React Query
  const { data, isLoading, error } = useGetGrants(accessToken, currentPage, 10)
  const deleteGrantMutation = useDeleteGrant(accessToken)

  const handleAddGrant = () => {
    router.push('/admin-dashboard/grant-management/add')
  }

  const handleEditGrant = (grant: any) => {
    router.push(`/admin-dashboard/grant-management/edit/${grant._id}`)
  }

  const handleViewGrant = (grant: any) => {
    setViewingGrant(grant)
    setIsDetailsOpen(true)
  }

  const handleDeleteGrant = async (grantId: string) => {
    try {
      await deleteGrantMutation.mutateAsync(grantId)
      toast.success('Grant deleted successfully')
    } catch (error) {
      toast.error('Failed to delete grant')
      console.error('Delete error:', error)
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Handle error state
  if (error) {
    return (
      <div className="bg-gray-50">
        <div className="w-full mx-auto text-center py-12">
          <p className="text-red-500 text-lg">Failed to load grants</p>
          <Button onClick={() => window.location.reload()} className="mt-4">
            Retry
          </Button>
        </div>
      </div>
    )
  }

  const grants = data?.data.items || []
  const pagination = {
    currentPage: data?.data.page || 1,
    totalPages: Math.ceil((data?.data.total || 0) / 10),
    totalData: data?.data.total || 0,
    hasNextPage: (data?.data.page || 1) * 10 < (data?.data.total || 0),
    hasPrevPage: (data?.data.page || 1) > 1,
  }

  return (
    <div className="bg-gray-50">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center gap-4 mb-4">
            <Button
              onClick={handleAddGrant}
              className="h-11 px-6 flex items-center gap-2 bg-[#355AC7] hover:bg-[#355AC7]/90"
            >
              <Plus className="w-4 h-4" />
              Add New Grant
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Card className="py-0">
          <CardContent className="p-0">
            <GrantTable
              grants={grants}
              onView={handleViewGrant}
              onEdit={handleEditGrant}
              onDelete={handleDeleteGrant}
              isLoading={isLoading}
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              totalData={pagination.totalData}
              hasNextPage={pagination.hasNextPage}
              hasPrevPage={pagination.hasPrevPage}
              onPageChange={handlePageChange}
            />
          </CardContent>
        </Card>

        {/* View Details Dialog */}
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogContent className="!max-w-4xl w-full rounded-xl shadow-lg h-[90vh] overflow-y-auto">
            <DialogHeader className="bg-white sticky top-0 z-10 pb-4">
              <DialogTitle className="text-2xl font-semibold text-gray-900">
                Grant Details
              </DialogTitle>
            </DialogHeader>

            {viewingGrant && (
              <div className="space-y-6 py-6">
                {/* Grant Header */}
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
                        {new Date(viewingGrant.deadline).toLocaleDateString(
                          'en-US',
                          {
                            month: 'short',
                            day: '2-digit',
                            year: 'numeric',
                          }
                        )}
                      </span>
                    </div>

                    <div>
                      <span className="font-semibold text-gray-700">
                        Status:
                      </span>
                      <span
                        className={`ml-2 px-3 py-1 rounded-full text-xs font-medium ${
                          viewingGrant.status === 'open'
                            ? 'bg-green-100 text-green-800'
                            : viewingGrant.status === 'upcoming'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {viewingGrant.status}
                      </span>
                    </div>

                    <div>
                      <span className="font-semibold text-gray-700">
                        Location:
                      </span>
                      <span className="ml-2 text-gray-600">
                        {viewingGrant.location}
                      </span>
                    </div>

                    <div>
                      <span className="font-semibold text-gray-700">
                        Industry:
                      </span>
                      <span className="ml-2 text-gray-600">
                        {viewingGrant.industry}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Activity */}
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">
                    Activity
                  </h4>
                  <p className="text-gray-700">{viewingGrant.activity}</p>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">
                    Description
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {viewingGrant.description}
                  </p>
                </div>

                {/* Image */}
                {viewingGrant.imageUrl && (
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">
                      Image
                    </h4>
                    <Image
                      src={viewingGrant.imageUrl}
                      alt={viewingGrant.title}
                      width={600}
                      height={400}
                      className="w-full max-w-md rounded-lg"
                    />
                  </div>
                )}

                {/* Files */}
                {viewingGrant.fileUrls?.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">
                      Attachments
                    </h4>
                    <ul className="space-y-2">
                      {viewingGrant.fileUrls.map(
                        (url: string, index: string) => (
                          <li key={index}>
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              Document {index + 1}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
