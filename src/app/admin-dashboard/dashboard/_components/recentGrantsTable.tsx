// components/dashboard/RecentGrantsTable.tsx
'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Eye } from 'lucide-react'
import { RecentGrant, useGetGrantDetails } from '@/lib/dashboardApi'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  grants: RecentGrant[]
  isLoading?: boolean
}

export default function RecentGrantsTable({ grants, isLoading }: Props) {
  const [selectedGrantId, setSelectedGrantId] = useState<string | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const session = useSession()
  const accessToken = session?.data?.user?.accessToken || ''

  const { data: grantDetailsData, isLoading: isLoadingDetails } =
    useGetGrantDetails(selectedGrantId, accessToken)

  const viewingGrant = grantDetailsData?.data

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const handleView = (grantId: string) => {
    setSelectedGrantId(grantId)
    setIsDetailsOpen(true)
  }

  const handleDetailsClose = (open: boolean) => {
    setIsDetailsOpen(open)
    if (!open) {
      setSelectedGrantId(null)
    }
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
    <>
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
                      onClick={() => handleView(grant._id)}
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

      {/* View Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={handleDetailsClose}>
        <DialogContent className="!max-w-4xl w-full rounded-xl shadow-lg h-[90vh] overflow-y-auto">
          <DialogHeader className="bg-white sticky top-0 z-10 pb-4">
            <DialogTitle className="text-2xl font-semibold text-gray-900">
              Grant Details
            </DialogTitle>
          </DialogHeader>

          {isLoadingDetails ? (
            <div className="space-y-4 py-6">
              <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
              <div className="h-32 bg-gray-200 rounded animate-pulse" />
            </div>
          ) : (
            viewingGrant && (
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
                {viewingGrant.fileUrls && viewingGrant.fileUrls.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">
                      Attachments
                    </h4>
                    <ul className="space-y-2">
                      {viewingGrant.fileUrls.map(
                        (url: string, index: number) => (
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
            )
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
