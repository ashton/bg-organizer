import { from } from 'rxjs'

import { TableModel } from './table.model'

export const TableDao = {
  findAll: () => from(TableModel.find()),
  findById: (tableId) => from(TableModel.findOne({ _id: tableId })),
  insert: (tableData) => from(TableModel.create(tableData)),
  addPlayer: ({ player, tableId }) => from(TableModel.updateOne(
    { _id: tableId },
    { $push: { players: player } }
  ))
}
