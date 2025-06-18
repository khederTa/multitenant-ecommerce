import { inferRouterOutputs } from '@trpc/server'

import type { AppRouter } from '@/trpc/routers/_app'

export type GategoriesGetManyOutput = inferRouterOutputs<AppRouter>['categories']['getMany']
export type GategoriesGetManyOutputSingle = GategoriesGetManyOutput[0]
