import mongoose from 'mongoose'

const TableSchema = new mongoose.Schema({
  game: String,
  maxPlayers: Number,
  players: [{ name: String, phone: String }],
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' }
})

export const TableModel = mongoose.model('Table', TableSchema)
