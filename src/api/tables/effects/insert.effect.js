import { use } from '@marblejs/core'
import { map, mergeMap } from 'rxjs/operators'
import { assoc } from 'ramda'

import { TableDao } from '../model'
import { insertTableValidator$ } from '../model/table.validators'
import { cleanMongoData  } from '../../common/lib/data'

export const insertTableEffect$ = req$ =>
  req$.pipe(
    use(insertTableValidator$),
    map(req => assoc('event', req.params.eventId, req.body)),
    mergeMap(TableDao.insert),
    map(cleanMongoData),
    map(table => ({ status: 201, body: table }) )
  )
