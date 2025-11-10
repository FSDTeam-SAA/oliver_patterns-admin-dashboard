// ==================== FILE: app/admin-dashboard/user-management/_components/UserManagement.tsx ====================
'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { demoUsersData } from '../../../../../data/demoUsers'
import { toast } from 'sonner'
import { User } from '../../../../../types/userTypes'
import UserTable from './user-table'

export default function UserManagement() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [viewingUser, setViewingUser] = useState<User | null>(null)
  const [users, setUsers] = useState(demoUsersData.users)

  const handleAddUser = () => {
    router.push('/admin-dashboard/user-management/add')
  }

  const handleEditUser = (user: User) => {
    router.push(`/admin-dashboard/user-management/edit/${user._id}`)
  }

  const handleViewUser = (user: User) => {
    setViewingUser(user)
    setIsDetailsOpen(true)
  }

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter((u) => u._id !== userId))
    toast.success('User deleted successfully')
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const pagination = demoUsersData.pagination

  return (
    <div className="bg-gray-50">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center gap-4 mb-0">
            {/* <div>
              <h1 className="text-3xl font-bold text-[#5A8DEE]">
                User Management
              </h1>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <span>Dashboard</span>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-gray-900 font-medium">
                  User Management
                </span>
              </div>
            </div> */}
            <Button
              onClick={handleAddUser}
              className="h-11 px-6 flex items-center gap-2 bg-[#5A8DEE] hover:bg-[#4A7DD8]"
            >
              <Plus className="w-4 h-4" />
              Add New User
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Card className="py-0">
          <CardContent className="p-0">
            <UserTable
              users={users}
              onView={handleViewUser}
              onEdit={handleEditUser}
              onDelete={handleDeleteUser}
              isLoading={false}
              currentPage={currentPage}
              totalPages={pagination.totalPages}
              totalData={pagination.totalData}
              hasNextPage={pagination.hasNextPage}
              hasPrevPage={pagination.hasPrevPage}
              onPageChange={handlePageChange}
            />
          </CardContent>
        </Card>

        {/* View Details Dialog */}
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                User Details
              </DialogTitle>
            </DialogHeader>

            {viewingUser && (
              <div className="space-y-4 py-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Name</p>
                  <p className="font-medium text-gray-900">
                    {viewingUser.name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-medium text-gray-900">
                    {viewingUser.email}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Plan Type</p>
                  <p className="font-medium text-gray-900">
                    {viewingUser.planType}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Joined</p>
                  <p className="font-medium text-gray-900">
                    {viewingUser.joined}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Last Active</p>
                  <p className="font-medium text-gray-900">
                    {viewingUser.lastActive}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Status</p>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      viewingUser.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {viewingUser.status}
                  </span>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
