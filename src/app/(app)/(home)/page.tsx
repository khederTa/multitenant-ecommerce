'use client'

import { useQuery } from '@tanstack/react-query'
import { useTRPC } from '@/trpc/client'

export default function Home() {
  const trpc = useTRPC()
  const { data } = useQuery(trpc.auth.session.queryOptions())
  console.log({ data })
  return <div className="">{JSON.stringify(data?.user, null, 2)}</div>
}
