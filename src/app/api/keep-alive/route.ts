import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const payload = await getPayload({ config: configPromise })
    await payload.find({ collection: 'users', limit: 1 })
    return NextResponse.json({ ok: true, timestamp: new Date().toISOString() })
  } catch (error) {
    return NextResponse.json({ error: 'DB ping failed' }, { status: 500 })
  }
}
