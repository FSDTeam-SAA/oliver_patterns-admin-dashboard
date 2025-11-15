import type { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar'
import '../globals.css'
import UserHeader from '@/components/reusable/UserHeader'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Dashboard',
  description: 'Manage your products, orders, and customers all in one place.',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await auth()

  if (!session?.user || session?.user?.role.toLowerCase() !== 'admin') {
    redirect('/signin')
  }

  console.log('admin-dashboard session:', session)

  return (
    <div className="bg-[#F8F9FC] min-h-screen flex">
      {/* Sidebar - Fixed */}
      <div className="w-[300px] fixed left-0 top-0 h-screen">
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="flex-1 ml-[300px] flex flex-col h-screen overflow-hidden">
        {/* Header - Fixed */}
        <div className="fixed left-[300px] right-0 top-0 z-10 bg-sky-100/50 border-b border-gray-200">
          <UserHeader />
        </div>

        {/* Page Content (scrollable) */}
        <div className="flex-1 overflow-y-auto pt-[110px] px-4">{children}</div>
      </div>
    </div>
  )
}
