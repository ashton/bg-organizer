import chalk from 'chalk'
import mongoose from 'mongoose'

const { DB_URL } = process.env

const onOpen = () =>
  console.info(chalk.green('[database] connected'))

const onError = (error) => {
  console.error(chalk.red(`[database] connection error: ${error.message}`))
  process.exit()
}

export default {
  connect () {
    return mongoose.connect(DB_URL, { useNewUrlParser: true })
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
