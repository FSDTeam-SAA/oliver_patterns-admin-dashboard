/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import React, { useState } from 'react'
import { CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { useGetPlans, useDeletePlan } from '@/lib/planApi'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'
import PlanForm from './planForm'
import PlanPreviewCard from './planPreview'
import PlanTable from './planTable'

export default function PlanManagement() {
  const [page, setPage] = useState(1)
  const session = useSession()
  const accessToken = session?.data?.user?.accessToken || ''

  const { data, isLoading } = useGetPlans(accessToken, page, 10)
  const deleteMut = useDeletePlan(accessToken)

  const [isFormOpen, setIsFormOpen] = useState(false)

  const [editingPlan, setEditingPlan] = useState<any | null>(null)
  const [previewPlan, setPreviewPlan] = useState<any | null>(null)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const plans = data?.data?.items || []
  const pagination = data?.data?.pagination || {
    page: 1,
    limit: 10,
    total: 0,
    pages: 1,
  }

  const handleView = (plan: any) => {
    setPreviewPlan(plan)
    setIsPreviewOpen(true)
  }

  const handleEdit = (plan: any) => {
    setEditingPlan(plan)
    setIsFormOpen(true)
  }

  const handleDelete = async (planId: string) => {
    try {
      await deleteMut.mutateAsync(planId)
      toast.success('Plan deleted')
    } catch (err) {
      console.error(err)
      toast.error('Failed to delete plan')
    }
  }

  const handleCreateClick = () => {
    setEditingPlan(null)
    setIsFormOpen(true)
  }

  const onSaved = () => {
    setPage(1) // go to first page after create/update
  }

  return (
    <div className="bg-gray-50">
      <div className="w-full mx-auto py-6">
        <div className="flex items-center justify-end mb-4">
          <div className="flex gap-2">
            <Button onClick={handleCreateClick}>+ Create Subscription</Button>
          </div>
        </div>

        <div>
          <CardContent className="p-4">
            <div className="mb-6">
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-[#0C2661] text-white rounded">
                  Pricing Plans
                </button>
                <button className="px-4 py-2 border border-blue-900 rounded">
                  Recent Transactions
                </button>
              </div>
            </div>

            <PlanTable
              plans={plans}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
              isLoading={isLoading}
              currentPage={pagination.page}
              totalPages={pagination.pages}
              totalData={pagination.total}
              onPageChange={(p) => setPage(p)}
            />
          </CardContent>
        </div>
      </div>

      <PlanForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        initial={editingPlan}
        onSaved={onSaved}
      />
      <PlanPreviewCard
        open={isPreviewOpen}
        onOpenChange={setIsPreviewOpen}
        plan={previewPlan}
      />
    </div>
  )
}
