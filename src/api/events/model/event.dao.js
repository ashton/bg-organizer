import { from } from 'rxjs'

import { EventModel } from './event.model'

export const EventDao = {
  findAll: () => from(EventModel.find()),
  findById: (eventId) => from(EventModel.findOne({ _id: eventId })),
  insert: (eventData) => from(EventModel.create(eventData))
}
