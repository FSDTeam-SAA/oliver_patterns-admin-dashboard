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
      iconColor: '#0C2661',
    },
    {
      title: 'Total Grants',
      value: totalGrants.toLocaleString(),
      icon: FileText,
      bgColor: 'bg-blue-50',
      iconColor: '#0C2661',
    },
    {
      title: 'Revenue',
      value: `$${totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      bgColor: 'bg-blue-50',
      iconColor: '#0C2661',
    },
    {
      title: 'Active Subscriptions',
      value: activeSubscriptions.toLocaleString(),
      icon: UserCheck,
      bgColor: 'bg-blue-50',
      iconColor: '#0C2661',
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
        <Card
          key={idx}
          className="border hover:shadow-md transition rounded-md shadow"
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base text-gray-600 font-medium mb-3">
                  {stat.title}
                </p>
                <h3 className="text-3xl font-bold text-[#0C2661]">
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
