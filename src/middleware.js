import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Only apply to /admin routes
  if (pathname.startsWith('/admin')) {
    const adminToken = request.cookies.get('admin_token')?.value;
    
    // If trying to access the login page
    if (pathname === '/admin/login') {
      if (adminToken === 'authenticated') {
        // Already logged in, redirect to dashboard
        return NextResponse.redirect(new URL('/admin', request.url));
      }
      // Allow access to login page
      return NextResponse.next();
    }

    // Protect all other admin routes
    if (adminToken !== 'authenticated') {
      // Not logged in, redirect to login page
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
