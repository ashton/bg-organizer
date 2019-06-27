import { combineRoutes, EffectFactory } from '@marblejs/core'
import { insertTableEffect$, getTableListEffect$ } from './effects'

const insertTable$ = EffectFactory
  .matchPath('/')
  .matchType('POST')
  .use(insertTableEffect$)

const getTableList$ = EffectFactory
  .matchPath('/')
  .matchType('GET')
  .use(getTableListEffect$)

export default combineRoutes('tables', [
  insertTable$,
  getTableList$
])
