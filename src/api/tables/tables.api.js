import { combineRoutes, EffectFactory } from '@marblejs/core'
import { getTableListEffect$, addPlayerEffect$, tableDetailEffect$ } from './effects'

const getTableList$ = EffectFactory
  .matchPath('/')
  .matchType('GET')
  .use(getTableListEffect$)

const getTableDetail$ = EffectFactory
  .matchPath('/:id')
  .matchType('GET')
  .use(tableDetailEffect$)

const addPlayer$ = EffectFactory
  .matchPath('/:tableId/players')
  .matchType('POST')
  .use(addPlayerEffect$)

export default combineRoutes('tables', [
  getTableList$,
  getTableDetail$,
  addPlayer$,
])
