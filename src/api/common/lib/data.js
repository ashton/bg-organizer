import { cond, is, map, not, and, T, identity } from 'ramda'

const renameIdField = (_, { _id: id, ...others }) => ({ id: id, ...others })
const mongoDataCleaning = model => model.toObject({ versionKey: false, transform: renameIdField })
const isObject = and(is(Object), not(is(Array)))

export const cleanMongoData = cond([
  [is(Array), map(mongoDataCleaning)],
  [isObject, mongoDataCleaning],
  [T, identity]
])
