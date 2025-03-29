// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const USERNAME = process.env.BASIC_AUTH_USERNAME;
const PASSWORD = process.env.BASIC_AUTH_PASSWORD;

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get('authorization')

  if (authHeader) {
    const base64Credentials = authHeader.split(' ')[1]
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8')
    const [providedUsername, providedPassword] = credentials.split(':')

    if (providedUsername === USERNAME && providedPassword === PASSWORD) {
      return NextResponse.next()
    }
  }


  const response = new NextResponse('Authentication required', { status: 401 })
  response.headers.set('WWW-Authenticate', 'Basic realm="Protected Area"')
  return response
}

export const config = {
  matcher: '/:path*',
}
