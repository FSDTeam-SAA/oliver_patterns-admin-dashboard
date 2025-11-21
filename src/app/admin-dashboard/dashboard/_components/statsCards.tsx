// components/dashboard/StatsCards.tsx
'use client'

import React from 'react'
import { Users, FileText, DollarSign, UserCheck } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface Props {
  totalUsers: number
  totalGrants: number
  totalRevenue: number
  activeSubscriptions: number
  isLoading?: boolean
}

export default function StatsCards({
  totalUsers,
  totalGrants,
  totalRevenue,
  activeSubscriptions,
  isLoading,
}: Props) {
  const stats = [
    {
      title: 'Total Users',
      value: totalUsers.toLocaleString(),
      icon: Users,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Total Grants',
      value: totalGrants.toLocaleString(),
      icon: FileText,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      title: 'Revenue',
      value: `$${totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Active Subscriptions',
      value: activeSubscriptions.toLocaleString(),
      icon: UserCheck,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ]

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-4 bg-gray-200 rounded w-20 mb-2" />
              <div className="h-8 bg-gray-200 rounded w-24" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, idx) => (
        <Card key={idx} className="border shadow-sm hover:shadow-md transition">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </h3>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
