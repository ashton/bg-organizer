import { t } from '@marblejs/middleware-io'

export const insertTableSchema = t.type({
  game: t.string,
  maxPlayers: t.number
})
