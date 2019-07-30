import { use, HttpError, HttpStatus } from '@marblejs/core'
import { propEq } from 'ramda'

import { of, forkJoin } from 'rxjs'
import { mergeMap, mapTo, filter, throwIfEmpty, catchError } from 'rxjs/operators'

import { TableDao } from '../model/table.dao'
import { addPlayerValidator$ } from '../model/table.validators'

const successfulUpdate = propEq('nModified', 1)
const getTable = tableId =>
  TableDao.findById(tableId).pipe(
    filter(table => table.players.length < table.maxPlayers),
    throwIfEmpty(() => new HttpError('Table full!', HttpStatus.UNPROCESSABLE_ENTITY))
  )

export const addPlayerEffect$ = req$ =>
  req$.pipe(
    use(addPlayerValidator$),
    mergeMap(({ body, params }) =>
      forkJoin({
        table: getTable(params.tableId),
        player: of(body)
      })
    ),
    mergeMap(({ player, table }) => TableDao.addPlayer({ player, tableId: table._id })),
    filter(successfulUpdate),
    mapTo({ status: 201 }),

    throwIfEmpty(() => new HttpError('Error adding player', HttpStatus.INTERNAL_SERVER_ERROR)),
    // catchError(err => of({ status: err.status, body: { status: 'error', message: err.message } }))
  )
