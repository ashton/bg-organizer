import { combineRoutes, EffectFactory } from '@marblejs/core'

import { versionEffect$ } from './common/effects'

const root$ = EffectFactory
  .matchPath('/')
  .matchType('GET')
  .use(versionEffect$)

export default combineRoutes('/api/v1', [
  root$
])
