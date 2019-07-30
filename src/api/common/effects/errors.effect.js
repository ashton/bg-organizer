import { HttpError, HttpStatus, EffectFactory } from '@marblejs/core';
import { throwError } from 'rxjs';
import { mapTo, map, switchMap } from 'rxjs/operators';

export const notFoundEffect$ = EffectFactory
  .matchPath('*')
  .matchType('*')
  .use(req$ => req$.pipe(
    switchMap(() => throwError(new HttpError('Route not found', HttpStatus.NOT_FOUND)))
  ))

export const errorHandler$ = (req$, _, meta) =>
  req$.pipe(
    mapTo(meta.error),
    map(error => ({ status: error.status, body: { status: 'error', message: error.message } }))
  )
