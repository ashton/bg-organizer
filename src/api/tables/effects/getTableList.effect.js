import { map, mergeMap } from 'rxjs/operators'

import { TableDao } from '../model/table.dao'
import { cleanMongoData } from '../../common/lib/data'

export const getTableListEffect$ = req$ =>
  req$.pipe(
    mergeMap(TableDao.findAll),
    map(cleanMongoData),
    map(body => ({ body }))
  )
