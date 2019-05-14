import { combineRoutes, EffectFactory } from '@marblejs/core'

import { versionEffect$ } from './common/effects'
import tables$ from './tables'

const root$ = EffectFactory
  .matchPath('/')
  .matchType('GET')
  .use(versionEffect$)

export default combineRoutes('/api/v1', [
  root$,
  tables$
])
