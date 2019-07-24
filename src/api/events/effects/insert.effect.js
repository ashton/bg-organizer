import { use } from '@marblejs/core'
import { map, mergeMap, mapTo } from 'rxjs/operators'

import { EventDao } from '../model'
import { insertEventValidator$ } from '../model/event.validators'

export const insertEventEffect$ = req$ =>
  req$.pipe(
    use(insertEventValidator$),
    map(req => req.body),
    mergeMap(EventDao.insert),
    mapTo({ status: 201 })
  )
