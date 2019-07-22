import { use } from '@marblejs/core'
import { propEq } from 'ramda'
import { map, mergeMap, mapTo, filter, defaultIfEmpty } from 'rxjs/operators'

import { TableDao } from '../model/table.dao'
import { addPlayerValidator$ } from '../model/table.validator'

export const addPlayerEffect$ = req$ =>
  req$.pipe(
    use(addPlayerValidator$),
    map(req => ({ player: req.body, tableId: req.params.tableId })),
    mergeMap(TableDao.addPlayer),
    filter(propEq('nModified', 1)),
    mapTo({ status: 201 }),
    defaultIfEmpty({ status: 500, body: { error: 'Error adding player' } })
  )
