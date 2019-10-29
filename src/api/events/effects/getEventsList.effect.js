import { map, mergeMap } from 'rxjs/operators'

import { EventDao } from '../model/event.dao'
import { cleanMongoData } from '../../common/lib/data'

export const getEventListEffect$ = req$ =>
  req$.pipe(
    mergeMap(EventDao.findAll),
    map(cleanMongoData),
    map(body => ({ body }))
  )
