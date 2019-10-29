import { combineRoutes, EffectFactory } from '@marblejs/core'
import { insertEventEffect$, getEventListEffect$ } from './effects'
import { insertTableEffect$, getEventTableListEffect$ } from '../tables/effects'

const insertEvent$ = EffectFactory
  .matchPath('/')
  .matchType('POST')
  .use(insertEventEffect$)

const getEventsList$ = EffectFactory
  .matchPath('/')
  .matchType('GET')
  .use(getEventListEffect$)

const createTable$ = EffectFactory
  .matchPath('/:eventId/tables')
  .matchType('POST')
  .use(insertTableEffect$)

const eventTables$ = EffectFactory
  .matchPath('/:eventId/tables')
  .matchType('GET')
  .use(getEventTableListEffect$)

export default combineRoutes('events', [
  insertEvent$,
  getEventsList$,
  createTable$,
  eventTables$
])
