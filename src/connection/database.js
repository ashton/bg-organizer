import chalk from 'chalk'
import mongoose from 'mongoose'

const { MONGODB_URI } = process.env

const onOpen = () =>
  console.info(chalk.green('[database] connected'))

const onError = (error) => {
  console.error(chalk.red(`[database] connection error: ${error.message}`))
  process.exit()
}

export default {
  connect () {
    return mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
      .then(onOpen)
      .catch(onError)
  },

  disconnect () {
    return mongoose.disconnect()
  },

  drop () {
    return mongoose.dropDatabase()
  }
}
