import { map, mergeMap } from 'rxjs/operators'
import { path } from 'ramda'
import { TableDao } from '../model/table.dao'
import { cleanMongoData } from '../../common/lib/data'

export const tableDetailEffect$ = req$ =>
  req$.pipe(
    map(path(['params', 'id'])),
    mergeMap(TableDao.findById),
    map(cleanMongoData),
    map(body => ({ body }))
  )
