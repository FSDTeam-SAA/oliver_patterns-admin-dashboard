// components/dashboard/RecentGrantsTable.tsx
'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import { RecentGrant } from '@/lib/dashboardApi'
import Link from 'next/link'

interface Props {
  grants: RecentGrant[]
  isLoading?: boolean
}

export default function RecentGrantsTable({ grants, isLoading }: Props) {
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
      <Card className="border shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">Recent Grants</CardTitle>
          <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-gray-100 rounded animate-pulse" />
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Grants</CardTitle>
        <Link href="/admin-dashboard/grant-management">
          <Button variant="link" className="text-[#0C2661] text-base p-0">
            See All
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {grants.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-8">
              No recent grants found
            </p>
          ) : (
            grants.map((grant) => (
              <div
                key={grant._id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">
                    {grant.title}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Grant ID: {grant._id.slice(-8)}</span>
                    <span>Deadline: {formatDate(grant.deadline)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-[#0C2661] bg-blue-50 px-3 py-1 rounded-full">
                    {grant.funding}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
