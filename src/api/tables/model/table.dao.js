import { from } from 'rxjs'

import { TableModel } from './table.model'

export const TableDao = {
  findAll: () => from(TableModel.find()),
  insert: (tableData) => from(TableModel.create(tableData)),
  addPlayer: ({ player, tableId }) => from(TableModel.updateOne(
    { _id: tableId, $where: 'this.players.length <= this.maxPlayers' },
    { $push: { players: player } }
  ))
}
