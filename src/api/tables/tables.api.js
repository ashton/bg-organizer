import { combineRoutes, EffectFactory } from '@marblejs/core'
import { insertTableEffect$ } from './effects'

const insertTable$ = EffectFactory
  .matchPath('/')
  .matchType('POST')
  .use(insertTableEffect$)

export default combineRoutes('tables', [
  insertTable$
])
