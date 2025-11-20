// components/plans/PlanPreviewCard.tsx
'use client'

import React from 'react'
import { Plan } from '@/lib/planApi'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'

interface Props {
  open: boolean
  onOpenChange: (v: boolean) => void
  plan: Plan | null
}

export default function PlanPreviewCard({ open, onOpenChange, plan }: Props) {
  if (!plan) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle>{/* Badge */}</DialogTitle>
      <DialogContent
        className="
          rounded-2xl 
          p-0 
          max-w-none 
          w-[400px]
          overflow-y-auto 
          border 
          shadow-xl
        "
      >
        <div className="p-8 bg-[#CCE5FF] rounded-2xl h-full">
          {/* Badge */}
          <div className="text-xs uppercase bg-sky-500 text-white px-4 py-1 rounded-full shadow-sm inline-block mb-4">
            {plan.name}
          </div>
          {/* Price section */}
          <div className="text-3xl font-bold text-gray-900">
            ${plan.price}{' '}
            <span className="text-base font-medium text-gray-700">
              / {plan.billingCycle}
            </span>
          </div>

          <p className="text-sm mt-2 text-gray-600">{plan.title}</p>

          {/* Features section */}
          <div className="mt-6 text-left">
            <h4 className="text-base font-semibold mb-3">
              What&apos;s included
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="mt-1">•</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          {/* <div className="mt-8 flex justify-center">
            <Button
              className="px-10 py-5 text-base rounded-full"
              onClick={() => onOpenChange(false)}
            >
              Get {plan.name}
            </Button>
          </div> */}
        </div>
      </DialogContent>
    </Dialog>
  )
}
