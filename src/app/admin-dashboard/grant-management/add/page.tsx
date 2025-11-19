'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Upload, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useAddGrant } from '@/lib/grantApi'
import { toast } from 'sonner'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export const LOCATION_ENUM = [
  'All Australia',
  'National',
  'Australian Capital Territory',
  'New South Wales',
  'Northern Territory',
  'Queensland',
  'South Australia',
  'Tasmania',
  'Victoria',
  'Western Australia',
]

export const ACTIVITY_ENUM = [
  'General Operations',
  'Environment and Sustainability',
  'Export',
  'Infrastructure / Equipment',
  'Innovation and R&D',
  'Manufacturing',
  'Marketing',
  'Start-up / Establishment',
  'Training / Employment',
  'Transport and Distribution',
  'Wholesale and Retail Trade',
]

export const INDUSTRY_ENUM = [
  'General - Non-Industry Specific',
  'Aeronautics',
  'Agriculture',
  'Automotive and Marine',
  'Building, Construction and Engineering',
  'Defence',
  'Education',
  'Energy and Renewables',
  'Finance and Business Services',
  'Food and Beverage',
  'Healthcare, Medical, Biotechnology and Nanotechnology',
  'Information Technology and Communication (ICT)',
  'Media and Entertainment',
  'Mining',
  'Textile, Clothing and Footwear',
  'Tourism',
  'Other - Not Listed',
]

export default function AddGrantPage() {
  const router = useRouter()
  const cu = useSession()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    funding: '',
    deadline: '',
    location: '',
    activity: '',
    industry: '',
    description: '',
    status: 'open',
  })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [files, setFiles] = useState<File[]>([])

  const accessToken = cu?.data?.user?.accessToken || ''
  const addGrantMutation = useAddGrant(accessToken)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImageFile(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const removeImage = () => {
    setImageFile(null)
    setImagePreview(null)
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()

      formDataToSend.append('title', formData.title)
      formDataToSend.append('type', formData.type)
      formDataToSend.append('funding', formData.funding)
      formDataToSend.append('deadline', formData.deadline)
      formDataToSend.append('location', formData.location)
      formDataToSend.append('activity', formData.activity)
      formDataToSend.append('industry', formData.industry)
      formDataToSend.append('description', formData.description)
      formDataToSend.append('status', formData.status)

      if (imageFile) {
        formDataToSend.append('image', imageFile)
      }

      files.forEach((file) => {
        formDataToSend.append('file', file)
      })

      await addGrantMutation.mutateAsync(formDataToSend)
      toast.success('Grant created successfully!')
      router.push('/admin-dashboard/grant-management')
    } catch (error) {
      toast.error('Failed to create grant')
      console.error('Create error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    router.back()
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full mx-auto px-4 py-6">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-[#5A8DEE]">
              Add New Grant
            </h1>
            <Button
              variant="ghost"
              onClick={handleCancel}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Grants
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">
                    Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Enter grant title..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">
                    Type <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="type"
                    value={formData.type}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                    placeholder="e.g., Grant"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="funding">
                    Funding <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="funding"
                    value={formData.funding}
                    onChange={(e) =>
                      handleInputChange('funding', e.target.value)
                    }
                    placeholder="e.g., $10,000 - $50,000"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deadline">
                    Deadline <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={(e) =>
                      handleInputChange('deadline', e.target.value)
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">
                    Location <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.location}
                    onValueChange={(value) =>
                      handleInputChange('location', value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {LOCATION_ENUM.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="activity">
                    Activity <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.activity}
                    onValueChange={(value) =>
                      handleInputChange('activity', value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select activity" />
                    </SelectTrigger>
                    <SelectContent>
                      {ACTIVITY_ENUM.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Industry */}
              <div className="space-y-2 ">
                <Label htmlFor="industry">
                  Industry <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.industry}
                  onValueChange={(value) =>
                    handleInputChange('industry', value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {INDUSTRY_ENUM.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">
                  Description <span className="text-red-500">*</span>
                </Label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange('description', e.target.value)
                  }
                  placeholder="Detailed description of the grant..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] resize-none"
                  required
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <Label>Image Upload</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-400 transition-colors">
                  {imagePreview ? (
                    <div className="relative">
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        width={300}
                        height={200}
                        className="w-full max-w-xs h-48 object-cover rounded-lg mx-auto"
                      />

                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label
                      htmlFor="image"
                      className="flex flex-col items-center cursor-pointer"
                    >
                      <Upload className="w-12 h-12 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-600">
                        Drag and drop files here
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        or click to browse
                      </span>
                      <Input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label>File Upload (Multiple PDFs)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-400 transition-colors">
                  {files.length > 0 ? (
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                        >
                          <span className="text-sm text-gray-700">
                            {file.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      <label
                        htmlFor="files"
                        className="block text-center text-sm text-blue-600 hover:text-blue-700 cursor-pointer mt-4"
                      >
                        + Add more files
                        <Input
                          id="files"
                          type="file"
                          multiple
                          accept=".pdf,.doc,.docx"
                          onChange={handleFilesChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  ) : (
                    <label
                      htmlFor="files"
                      className="flex flex-col items-center cursor-pointer"
                    >
                      <Upload className="w-12 h-12 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-600">
                        Drag and drop files here
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        or click to browse
                      </span>
                      <Input
                        id="files"
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx"
                        onChange={handleFilesChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Status */}
              <div className="space-y-2 max-w-full">
                <Label htmlFor="status">
                  Status <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => handleInputChange('status', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Form Actions */}
              <div className="flex justify-start gap-3 pt-4 border-t">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-w-[120px] bg-[#5A8DEE] hover:bg-[#4A7DD8]"
                >
                  {isSubmitting ? 'Creating...' : 'Save Grant'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
