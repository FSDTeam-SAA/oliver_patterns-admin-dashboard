// components/dashboard/RecentSubscribersTable.tsx
'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RecentSubscriber } from '@/lib/dashboardApi'
import Link from 'next/link'

interface Props {
  subscribers: RecentSubscriber[]
  isLoading?: boolean
}

export default function RecentSubscribersTable({
  subscribers,
  isLoading,
}: Props) {
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
          <CardTitle className="text-lg font-semibold">
            Recent Subscribers
          </CardTitle>
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
        <CardTitle className="text-lg font-semibold">
          Recent Subscribers
        </CardTitle>
        <Link href="/admin-dashboard/subscription/recent-transactions">
          <Button variant="link" className="text-blue-600 text-sm p-0">
            See All
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {subscribers.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-8">
              No recent subscribers found
            </p>
          ) : (
            subscribers.map((subscriber) => (
              <div
                key={subscriber._id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">
                    {subscriber.name}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{subscriber.email}</span>
                    <span>
                      Started: {formatDate(subscriber.subscriptionStart)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium capitalize px-3 py-1 rounded-full bg-blue-50 text-blue-600">
                    {subscriber.planName} Plan
                  </span>
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      subscriber.hasActiveSubscription
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {subscriber.planStatus}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
