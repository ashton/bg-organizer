import { mapTo } from 'rxjs/operators'

export const versionEffect$ = req$ =>
  req$.pipe(
    mapTo({ body: { version: '1.0.0' } })
  )
