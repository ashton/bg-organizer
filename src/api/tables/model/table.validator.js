import { t, requestValidator$ } from '@marblejs/middleware-io'

export const insertTableSchema = t.type({
  game: t.string,
  maxPlayers: t.number
})

export const insertTableValidator$ = requestValidator$({ body: insertTableSchema })
