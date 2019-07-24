import { t, requestValidator$ } from '@marblejs/middleware-io'

const insertEventSchema = t.type({
  name: t.string,
  date: t.string,
  description: t.string
})

export const insertEventValidator$ = requestValidator$({ body: insertEventSchema })
