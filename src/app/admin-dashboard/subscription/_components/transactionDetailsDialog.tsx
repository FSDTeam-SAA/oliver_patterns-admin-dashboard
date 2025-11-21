// components/transactions/TransactionDetailsDialog.tsx
'use client'

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export interface TransactionDetails {
  _id: string
  name: string
  email: string
  subscription: {
    planId: string
    startDate: string
    endDate: string
  }
  hasActiveSubscription: boolean
  plan: {
    name: string
    billingCycle: string
    price: number
    title: string
    features: string[]
    status: string
    emailNotifications: boolean
    searchLimit: number
    favoritesEnabled: boolean
  }
}

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  details: TransactionDetails | null
  isLoading?: boolean
}

export default function TransactionDetailsDialog({
  open,
  onOpenChange,
  details,
  isLoading,
}: Props) {
  if (!details && !isLoading) return null

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Transaction Details
          </DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="space-y-3 py-4">
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
          </div>
        ) : details ? (
          <div className="space-y-4 py-2">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-600">Name</label>
              <p className="text-base text-gray-900 mt-1">{details.name}</p>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <p className="text-base text-gray-900 mt-1">{details.email}</p>
            </div>

            {/* Plan Type */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Plan Type
              </label>
              <p className="text-base text-gray-900 mt-1 capitalize">
                {details.plan.name}
              </p>
            </div>

            {/* Price */}
            <div>
              <label className="text-sm font-medium text-gray-600">Price</label>
              <p className="text-base text-gray-900 mt-1">
                ${details.plan.price}
              </p>
            </div>

            {/* Date Range */}
            <div>
              <label className="text-sm font-medium text-gray-600">Date</label>
              <p className="text-base text-gray-900 mt-1">
                {formatDate(details.subscription.startDate)}
                {/* {formatDate(details.subscription.endDate)} */}
              </p>
            </div>

            {/* Status */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Status
              </label>
              <div className="mt-1">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    details.hasActiveSubscription
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {details.hasActiveSubscription ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>

            {/* Plan Title */}
            {/* {details.plan.title && (
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Plan Description
                </label>
                <p className="text-sm text-gray-700 mt-1">
                  {details.plan.title}
                </p>
              </div>
            )} */}

            {/* Features */}
            {/* {details.plan.features && details.plan.features.length > 0 && (
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Features
                </label>
                <ul className="mt-2 space-y-1">
                  {details.plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-700 flex items-start"
                    >
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
