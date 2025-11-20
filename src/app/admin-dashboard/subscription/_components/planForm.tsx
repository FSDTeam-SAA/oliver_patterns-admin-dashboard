/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
// components/plans/PlanForm.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { useCreatePlan, useUpdatePlan } from '@/lib/planApi'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'
import { Plan } from '@/lib/planApi'

interface Props {
  open: boolean
  onOpenChange: (v: boolean) => void
  initial?: Plan | null
  onSaved?: () => void
}

export default function PlanForm({
  open,
  onOpenChange,
  initial = null,
  onSaved,
}: Props) {
  const session = useSession()
  const accessToken = session?.data?.user?.accessToken || ''

  const createMutation = useCreatePlan(accessToken)
  const updateMutation = useUpdatePlan(accessToken)

  // DEFAULT / RESET STATE
  const emptyForm: Plan = {
    name: '',
    price: 0,
    billingCycle: 'monthly',
    title: '',
    features: [],
    status: 'active',
    emailNotifications: false,
    searchLimit: 0,
    favoritesEnabled: false,
  }

  const [form, setForm] = useState<Plan>(emptyForm)
  const [featuresText, setFeaturesText] = useState('')

  // LOAD INITIAL DATA FOR EDITING
  useEffect(() => {
    if (initial) {
      // remove backend metadata so it doesn’t enter form state
      const { _id, createdAt, updatedAt, __v, totalSubscribers, ...clean } =
        initial

      setForm({
        ...clean,
        features: initial.features ?? [],
        price: initial.price ?? 0,
      })
    } else {
      setForm(emptyForm)
      setFeaturesText('')
    }
  }, [initial, open])

  // FEATURES TEXT UPDATE
  useEffect(() => {
    setFeaturesText((form.features || []).join(', '))
  }, [form.features])

  // SUBMIT HANDLER
  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault()

    // AGAIN REMOVE ANY _id JUST TO BE SAFE
    const { _id, createdAt, updatedAt, __v, totalSubscribers, ...clean } = form

    const payload: Plan = {
      ...clean,
      features: featuresText
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      price: Number(form.price),
    }

    try {
      if (initial && initial._id) {
        await updateMutation.mutateAsync({ planId: initial._id, payload })
        toast.success('Plan updated')
      } else {
        await createMutation.mutateAsync(payload)
        toast.success('Plan created')
      }
      onSaved?.()
      onOpenChange(false)
    } catch {
      toast.error('Failed to save plan')
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
        bg-gray-50
        max-w-none
        sm:max-w-none
        w-[50vw]
        h-[82vh]
        overflow-y-auto
        rounded-2xl
        p-8
      "
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {initial ? 'Edit Plan' : 'Create New Plan'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-8 mt-6">
          {/* GRID FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label>Plan Name</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-3">
              <Label>Price</Label>
              <Input
                type="number"
                value={String(form.price)}
                onChange={(e) =>
                  setForm({ ...form, price: Number(e.target.value) })
                }
                required
              />
            </div>

            <div className="space-y-3">
              <Label>Billing Cycle</Label>
              <Select
                value={form.billingCycle}
                onValueChange={(v) => setForm({ ...form, billingCycle: v })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Status</Label>
              <Select
                value={form.status}
                onValueChange={(v) =>
                  setForm({
                    ...form,
                    status: v as 'active' | 'inactive' | 'draft',
                  })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2 space-y-3">
              <Label>Title</Label>
              <Input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </div>

            <div className="col-span-2 space-y-3">
              <Label>Features (comma separated)</Label>
              <Input
                value={featuresText}
                onChange={(e) => setFeaturesText(e.target.value)}
              />
              <p className="text-xs text-gray-500">
                Example: Unlimited searches, Saved grants, Advanced filters
              </p>
            </div>

            <div className="col-span-2 space-y-3">
              <Label>Search Limit</Label>
              <Input
                type="number"
                value={String(form.searchLimit ?? 0)}
                onChange={(e) =>
                  setForm({ ...form, searchLimit: Number(e.target.value) })
                }
              />
            </div>
          </div>

          {/* CHECKBOXES */}
          <div className="flex flex-col gap-4 pt-4">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-4 w-4"
                checked={!!form.emailNotifications}
                onChange={(e) =>
                  setForm({ ...form, emailNotifications: e.target.checked })
                }
              />
              <span className="text-sm">Email Notifications</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-4 w-4"
                checked={!!form.favoritesEnabled}
                onChange={(e) =>
                  setForm({ ...form, favoritesEnabled: e.target.checked })
                }
              />
              <span className="text-sm">Favorites Enabled</span>
            </label>
          </div>

          <DialogFooter className="flex justify-end gap-4 pt-4">
            <DialogClose asChild>
              <Button variant="outline" className="px-6">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="px-6">
              {initial ? 'Update' : 'Save'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
