import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  // 1. Define protected routes
  const protectedRoutes = [
    '/dashboard',
    '/create-debate',
    '/profile',
    '/settings',
    '/debates/create'
  ]
  
  
  // 2. Check if current route is protected
  const path = req.nextUrl.pathname
  const isProtected = protectedRoutes.some(route => path.startsWith(route))
  
  if (isProtected) {
    // 3. Get token from NextAuth
    const token = await getToken({ req })
    
    // 4. Redirect to login if not authenticated
    if (!token) {
      const loginUrl = new URL('/login', req.url)
      loginUrl.searchParams.set('callbackUrl', encodeURIComponent(req.url))
      return NextResponse.redirect(loginUrl)
    }
  }
  
  return NextResponse.next()
}

// 5. Specify routes to protect
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/create-debate',
    '/profile/:path*',
    '/settings/:path*',
    '/debates/create'
  ]
}