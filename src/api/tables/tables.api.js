import { combineRoutes, EffectFactory } from '@marblejs/core'
import { getTableListEffect$, addPlayerEffect$ } from './effects'

const getTableList$ = EffectFactory
  .matchPath('/')
  .matchType('GET')
  .use(getTableListEffect$)

const addPlayer$ = EffectFactory
  .matchPath('/:tableId/players')
  .matchType('POST')
  .use(addPlayerEffect$)

export default combineRoutes('tables', [
  getTableList$,
  addPlayer$
])
