import { use } from '@marblejs/core'
import { map, mergeMap, mapTo } from 'rxjs/operators'

import { TableDao } from '../model'
import { insertTableValidator$ } from '../model/table.validators'

export const insertTableEffect$ = req$ =>
  req$.pipe(
    use(insertTableValidator$),
    map(req => req.body),
    mergeMap(TableDao.insert),
    mapTo({ status: 201 })
  )
