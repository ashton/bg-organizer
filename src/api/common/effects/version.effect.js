import { mapTo } from 'rxjs/operators'

export const versionEffect$ = req$ =>
  req$.pipe(
    mapTo({ body: `API version: v1` })
  )
