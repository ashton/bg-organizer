import { tap, map, switchMap } from 'rxjs/operators'
import { TableDao } from '../model'

export const insertTableEffect$ = req$ =>
  req$.pipe(
    map(req => req.body),
    switchMap(TableDao.insert),
    tap(console.log)
  )
