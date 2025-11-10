// ==================== FILE: app/admin-dashboard/grant-management/_components/GrantManagement.tsx ====================
'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, ChevronRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import GrantTable from '../_components/grantTable'
import { Grant } from '../../../../../types/grant'
import { demoGrantsData } from '@/../data/demoGrants'
import { toast } from 'sonner'

export default function GrantManagement() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [viewingGrant, setViewingGrant] = useState<Grant | null>(null)
  const [grants, setGrants] = useState(demoGrantsData.grants)

  const handleAddGrant = () => {
    router.push('/admin-dashboard/grant-management/add')
  }

  const handleEditGrant = (grant: Grant) => {
    router.push(`/admin-dashboard/grant-management/edit/${grant._id}`)
  }

  const handleViewGrant = (grant: Grant) => {
    setViewingGrant(grant)
    setIsDetailsOpen(true)
  }

  const handleDeleteGrant = (grantId: string) => {
    // Demo: Remove from local state
    setGrants(grants.filter((g) => g._id !== grantId))
    toast.success('Grant deleted successfully')
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const pagination = demoGrantsData.pagination

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
          {/* <CardHeader>
            <CardTitle>Grants Management</CardTitle>
            <p className="text-sm text-gray-500">
              Manage all grants in the system
            </p>
          </CardHeader> */}
          <CardContent className="p-0">
            <GrantTable
              grants={grants}
              onView={handleViewGrant}
              onEdit={handleEditGrant}
              onDelete={handleDeleteGrant}
              isLoading={false}
              currentPage={currentPage}
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
          <DialogContent className="!max-w-4xl w-full rounded-xl shadow-lg">
            <DialogHeader className=" bg-white">
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
                        {viewingGrant.deadline}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">
                        Status:
                      </span>
                      <span
                        className={`ml-2 px-3 py-1 rounded-full text-xs font-medium ${
                          viewingGrant.status === 'Open'
                            ? 'bg-green-100 text-green-800'
                            : viewingGrant.status === 'Upcoming'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {viewingGrant.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Eligibility */}
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">
                    Eligibility Entities
                  </h4>
                  <p className="text-gray-700">{viewingGrant.eligibility}</p>
                </div>

                {/* Application Process */}
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">
                    Application Process
                  </h4>
                  <p className="text-gray-700">
                    {viewingGrant.applicationProcess}
                  </p>
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
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
