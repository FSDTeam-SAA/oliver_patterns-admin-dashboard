// ==================== FILE: app/admin-dashboard/grant-management/edit/[id]/page.tsx ====================
'use client'

import React from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import GrantForm, { GrantFormData } from '../../_components/grantForm'
import { demoGrantsData } from '@/../data/demoGrants'
import { toast } from 'sonner'

export default function EditGrantPage() {
  const router = useRouter()
  const params = useParams()
  const grantId = params.id as string

  // Find grant from demo data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const grant = demoGrantsData.grants.find((g: any) => g._id === grantId)

  const handleSubmit = (data: GrantFormData) => {
    console.log('Updated Grant Data:', { grantId, ...data })

    // Demo: Show success message
    toast.success('Grant updated successfully!')

    // Navigate back to grants list
    router.push('/admin-dashboard/grant-management')
  }

  const handleCancel = () => {
    router.back()
  }

  if (!grant) {
    return (
      <div className="bg-gray-50 flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <div className="text-red-500 text-lg font-semibold mb-2">
              Grant Not Found
            </div>
            <p className="text-gray-600 mb-4">
              The grant you&apos;re trying to edit doesn&apos;t exist.
            </p>
            <Button
              onClick={() => router.push('/admin-dashboard/grant-management')}
            >
              Back to Grants
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="bg-transparent">
      <div className="max-w-full mx-auto">
        <div className="mb-2 flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-[#5A8DEE]">Edit Grant</h1>
          <Button
            variant="ghost"
            onClick={handleCancel}
            className="mb-4 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Grants
          </Button>
        </div>

        <Card>
          <CardContent>
            <GrantForm
              grant={grant}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
