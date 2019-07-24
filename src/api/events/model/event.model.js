import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema({
  name: String,
  date: String,
  description: String
})

export const EventModel = mongoose.model('Event', EventSchema)
