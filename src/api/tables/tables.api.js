import { combineRoutes, EffectFactory } from '@marblejs/core'
import { insertTableEffect$, getTableListEffect$, addPlayerEffect$ } from './effects'

const insertTable$ = EffectFactory
  .matchPath('/')
  .matchType('POST')
  .use(insertTableEffect$)

const getTableList$ = EffectFactory
  .matchPath('/')
  .matchType('GET')
  .use(getTableListEffect$)

const addPlayer$ = EffectFactory
  .matchPath('/:tableId/players')
  .matchType('POST')
  .use(addPlayerEffect$)

export default combineRoutes('tables', [
  insertTable$,
  getTableList$,
  addPlayer$
])
