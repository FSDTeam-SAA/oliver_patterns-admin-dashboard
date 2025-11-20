'use client'

import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Settings,
  Users,
  Bell,
  Calendar,
} from 'lucide-react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoutDialog from './LogoutDialog'
import Image from 'next/image'

const sidebarItems = [
  {
    icon: <LayoutDashboard size={20} />,
    text: 'Dashboard Overview',
    href: '/admin-dashboard/dashboard',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Calendar',
    href: '/admin-dashboard/calendar',
  },
  {
    icon: <FileText size={20} />,
    text: 'Grant Management',
    href: '/admin-dashboard/grant-management',
  },
  {
    icon: <Users size={20} />,
    text: 'User Management',
    href: '/admin-dashboard/user-management',
  },
  {
    icon: <Bell size={20} />,
    text: 'Subscription Management',
    href: '/admin-dashboard/podcast-management',
  },
  {
    icon: <MessageSquare size={20} />,
    text: 'Contact Management',
    href: '/admin-dashboard/contact-management',
  },
  {
    icon: <Settings size={20} />,
    text: 'Settings',
    href: '/admin-dashboard/settings',
  },
]

function SidebarItem({
  icon,
  text,
  href,
  active,
}: {
  icon: React.ReactNode
  text: string
  href: string
  active?: boolean
}) {
  return (
    <div className="space-y-4">
      <Link href={href}>
        <div
          className={`flex items-center gap-3 px-4 py-3 rounded cursor-pointer transition-all ${
            active
              ? 'bg-[#d6e6f7] text-[#0C2661]'
              : 'text-[#4A5568] hover:bg-[#e3f2fd]'
          }`}
        >
          <span>{icon}</span>

          <span className="text-base font-medium">{text}</span>
        </div>
      </Link>
    </div>
  )
}

export default function AdminSidebar() {
  const pathname = usePathname()

  // Robust check for active link
  const isActiveLink = (href: string) => {
    if (pathname === href) return true
    // Split paths by '/' and compare the first 2 segments
    const pathSegments = pathname.split('/').filter(Boolean)
    const hrefSegments = href.split('/').filter(Boolean)
    return (
      pathSegments[0] === hrefSegments[0] && pathSegments[1] === hrefSegments[1]
    )
  }

  return (
    <aside className="w-[300px] bg-sky-100/70 border-r border-gray-200 min-h-screen flex flex-col">
      {/* Logo Section */}
      <div className=" flex justify-center pt-5 mb-3">
        <Link href="/admin-dashboard/dashboard">
          <Image
            src="/icons/auth-logo2.png"
            alt="admin logo"
            width={230} // keep original intrinsic width
            height={100} // keep intrinsic height
            sizes="140px"
            style={{
              width: '141px', // final rendered size
              height: '60px',
              objectFit: 'contain',
            }}
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex px-4 pt-6  pb-2">
        <div className="space-y-2">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.text}
              {...item}
              active={isActiveLink(item.href)}
            />
          ))}
        </div>
      </nav>

      {/* Logout Section */}
      <div className=" mt-auto pb-3 pl-2">
        <LogoutDialog />
      </div>
    </aside>
  )
}
