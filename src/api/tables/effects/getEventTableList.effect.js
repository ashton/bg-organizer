import { map, mergeMap } from 'rxjs/operators'
import { path } from 'ramda'

import { TableDao } from '../model/table.dao'
import { cleanMongoData } from '../../common/lib/data'

export const getEventTableListEffect$ = req$ =>
  req$.pipe(
    map(path(['params', 'eventId'])),
    mergeMap(TableDao.findByEvent),
    map(cleanMongoData),
    map(body => ({ body }))
  )
