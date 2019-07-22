import { t, requestValidator$ } from '@marblejs/middleware-io'

export const insertTableSchema = t.type({
  game: t.string,
  maxPlayers: t.number
})

export const insertTableValidator$ = requestValidator$({ body: insertTableSchema })

export const addPlayerPathSchema = t.type({
  tableId: t.string
})

export const addPlayerBodySchema = t.type({
  name: t.string
})

export const addPlayerValidator$ = requestValidator$({ body: addPlayerBodySchema, params: addPlayerPathSchema })
