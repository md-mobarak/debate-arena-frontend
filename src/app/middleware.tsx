import { NextResponse, type NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET })
  const { pathname } = req.nextUrl

  // Protected routes
  const protectedRoutes = [
    '/profile',
    '/create-debate',
    '/debate'
  ]

  // Check if route is protected
  const isProtected = protectedRoutes.some(route => 
    pathname.startsWith(route)
  )

  // Redirect to login if not authenticated
  if (isProtected && !token) {
    const loginUrl = new URL('/login', req.url)
    loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}