// ==================== FILE: app/admin-dashboard/grant-management/_components/GrantForm.tsx ====================
'use client'

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import { Grant } from '../../../../../types/grant'
import { toast } from 'sonner'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const grantSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  type: z.string().min(1, 'Type is required'),
  funding: z.string().min(1, 'Funding amount is required'),
  deadline: z.string().min(1, 'Deadline is required'),
  eligibility: z.string().min(1, 'Eligibility is required'),
  applicationProcess: z.string().min(1, 'Application process is required'),
  description: z.string().min(1, 'Description is required'),
  status: z.enum(['Open', 'Closed', 'Upcoming']),
})

export type GrantFormData = z.infer<typeof grantSchema>

interface GrantFormProps {
  grant?: Grant | null
  onSubmit: (data: GrantFormData) => void
  onCancel: () => void
  isLoading?: boolean
}

export default function GrantForm({
  grant,
  onSubmit,
  onCancel,
  isLoading,
}: GrantFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue, // ADD THIS
    formState: { errors },
  } = useForm<GrantFormData>({
    resolver: zodResolver(grantSchema),
    defaultValues: {
      title: grant?.title || '',
      type: grant?.type || '',
      funding: grant?.funding || '',
      deadline: grant?.deadline || '',
      eligibility: grant?.eligibility || '',
      applicationProcess: grant?.applicationProcess || '',
      description: grant?.description || '',
      status: grant?.status || 'Open',
    },
  })

  useEffect(() => {
    if (grant) {
      reset({
        title: grant.title || '',
        type: grant.type || '',
        funding: grant.funding || '',
        deadline: grant.deadline || '',
        eligibility: grant.eligibility || '',
        applicationProcess: grant.applicationProcess || '',
        description: grant.description || '',
        status: grant.status || 'Open',
      })
    }
  }, [grant, reset])

  const onFormSubmit = (data: GrantFormData) => {
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div>
          <Label htmlFor="title" className="text-sm font-medium text-gray-700">
            Title
          </Label>
          <Input
            id="title"
            placeholder="Enter grant title..."
            {...register('title')}
            className="mt-1"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Type */}
        <div>
          <Label htmlFor="type" className="text-sm font-medium text-gray-700">
            Type
          </Label>
          <Input
            id="type"
            placeholder="e.g., Business, Technology"
            {...register('type')}
            className="mt-1"
          />
          {errors.type && (
            <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
          )}
        </div>

        {/* Funding */}
        <div>
          <Label
            htmlFor="funding"
            className="text-sm font-medium text-gray-700"
          >
            Funding
          </Label>
          <Input
            id="funding"
            placeholder="e.g., $25,000"
            {...register('funding')}
            className="mt-1"
          />
          {errors.funding && (
            <p className="text-red-500 text-sm mt-1">
              {errors.funding.message}
            </p>
          )}
        </div>

        {/* Deadline */}
        <div>
          <Label
            htmlFor="deadline"
            className="text-sm font-medium text-gray-700"
          >
            Deadline
          </Label>
          <Input
            id="deadline"
            placeholder="e.g., Jan 15, 2025"
            {...register('deadline')}
            className="mt-1"
          />
          {errors.deadline && (
            <p className="text-red-500 text-sm mt-1">
              {errors.deadline.message}
            </p>
          )}
        </div>
      </div>

      {/* Eligibility */}
      <div>
        <Label
          htmlFor="eligibility"
          className="text-sm font-medium text-gray-700"
        >
          Eligibility Entities
        </Label>
        <Input
          id="eligibility"
          placeholder="Who can apply for this grant?"
          {...register('eligibility')}
          className="mt-1"
        />
        {errors.eligibility && (
          <p className="text-red-500 text-sm mt-1">
            {errors.eligibility.message}
          </p>
        )}
      </div>

      {/* Application Process */}
      <div>
        <Label
          htmlFor="applicationProcess"
          className="text-sm font-medium text-gray-700"
        >
          Application Process
        </Label>
        <textarea
          id="applicationProcess"
          placeholder="Describe the application process..."
          {...register('applicationProcess')}
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
        />
        {errors.applicationProcess && (
          <p className="text-red-500 text-sm mt-1">
            {errors.applicationProcess.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <Label
          htmlFor="description"
          className="text-sm font-medium text-gray-700"
        >
          Description
        </Label>
        <textarea
          id="description"
          placeholder="Detailed description of the grant..."
          {...register('description')}
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Status */}
      <div className="space-y-1">
        <Label htmlFor="status" className="text-sm font-medium text-gray-700">
          Status
        </Label>

        <Select
          value={watch('status')}
          onValueChange={(value) => setValue('status', value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="Open">Open</SelectItem>
            <SelectItem value="Closed">Closed</SelectItem>
            <SelectItem value="Upcoming">Upcoming</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Form Actions */}
      <div className="flex justify-start gap-3 pt-6">
        <Button
          type="submit"
          disabled={isLoading}
          className="min-w-[120px] bg-[#5A8DEE] hover:bg-[#4A7DD8]"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {grant ? 'Updating...' : 'Creating...'}
            </>
          ) : grant ? (
            'Update'
          ) : (
            'Save'
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}
