import { use } from '@marblejs/core'
import { map, mergeMap } from 'rxjs/operators'

import { EventDao } from '../model'
import { insertEventValidator$ } from '../model/event.validators'
import { cleanMongoData  } from '../../common/lib/data'

export const insertEventEffect$ = req$ =>
  req$.pipe(
    use(insertEventValidator$),
    map(req => req.body),
    mergeMap(EventDao.insert),
    map(cleanMongoData),
    map(event => ({  status: 201, body: event } ))
  )
