// ==================== FILE: app/admin-dashboard/grant-management/add/page.tsx ====================
'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import GrantForm, { GrantFormData } from '../_components/grantForm'
import { toast } from 'sonner'

export default function AddGrantPage() {
  const router = useRouter()

  const handleSubmit = (data: GrantFormData) => {
    console.log('New Grant Data:', data)

    // Demo: Show success message
    toast.success('Grant created successfully!')

    // Navigate back to grants list
    router.push('/admin-dashboard/grant-management')
  }

  const handleCancel = () => {
    router.back()
  }

  return (
    <div className="bg-gray-50">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-3">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-[#5A8DEE]">
              Add New Grant
            </h1>

            <Button
              variant="ghost"
              onClick={handleCancel}
              className="mb-4 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Grants
            </Button>
          </div>
        </div>

        {/* Form */}
        <Card>
          {/* <CardHeader>
            <CardTitle>Grants Management</CardTitle>
            <p className="text-sm text-gray-500">
              Manage all grants in the system
            </p>
          </CardHeader> */}
          <CardContent className="bg-transparent">
            <GrantForm onSubmit={handleSubmit} onCancel={handleCancel} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
