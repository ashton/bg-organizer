import mongoose from 'mongoose'

const TableSchema = new mongoose.Schema({
  game: String,
  maxPlayers: Number,
  players: [{ name: String }]
})

export const TableModel = mongoose.model('Table', TableSchema)
