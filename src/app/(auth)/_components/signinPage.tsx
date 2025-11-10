/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import AuthLayout from './authLayout'
import { signIn } from 'next-auth/react'

const signinSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password required'),
})

export default function SigninPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = async (values: z.infer<typeof signinSchema>) => {
    try {
      setIsLoading(true)
      const res = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
      })
      setIsLoading(false)

      if (!res) {
        toast.error('Login failed. Please try again.')
        return
      }

      if ('error' in res && res.error) {
        toast.error(res.error)
        return
      }

      toast.success('Login successful! 🎉')
      router.push('/admin-dashboard')
    } catch (err: any) {
      setIsLoading(false)
      toast.error(err?.message || 'Login failed')
    }
  }

  return (
    <AuthLayout>
      <div className="bg-[#eaf1fa] shadow rounded p-8 w-full max-w-xl">
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-bold text-[#0C2661]">
            Welcome to the Grants Search Portal
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Access your account to manage.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#424242]">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="hello@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 font-medium" />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#424242]">Password</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        className="pr-10"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <FormMessage className="text-red-400 font-medium" />
                </FormItem>
              )}
            />

            {/* Remember me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 text-gray-600">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-blue-600"
                  checked
                  readOnly
                />
                <span>Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-blue-600 underline">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full text-white bg-gradient-to-r from-[#355AC7] to-[#1271F2] hover:opacity-90"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </Button>

            {/* Sign Up link */}
            {/* <p className="text-center text-sm text-gray-600 mt-5">
              Don’t have an account?{' '}
              <Link
                href="/signup"
                className="text-blue-600 font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p> */}
          </form>
        </Form>
      </div>
    </AuthLayout>
  )
}
