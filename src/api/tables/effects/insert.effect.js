import { use } from '@marblejs/core'
import { validator$, Joi } from '@marblejs/middleware-joi'
import { tap, map, mergeMap } from 'rxjs/operators'

import { TableDao } from '../model'

export const insertTableEffect$ = req$ =>
  req$.pipe(
    use(
      validator$({
        game: Joi.string().required(),
        maxPlayers: Joi.number().required()
      })
    ),
    map(req => req.body),
    mergeMap(TableDao.insert),
    tap(console.log)
  )
