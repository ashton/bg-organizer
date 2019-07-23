import { createServer } from 'http'
import chalk from 'chalk'

const { HOST = 'localhost', PORT = 3000 } = process.env
const onListen = () => {
  console.info(chalk.green('[server] running'), `@ http://${HOST}:${PORT}/`)
}

const onClose = () => {
  console.info(chalk.green(`[server] stopped`))
}

const onError = (error) => {
  console.error(chalk.red('[server] errored'), error.message)
}

const Server = {
  create: async (app) =>
    createServer(app)
      .listen(PORT, onListen)
      .on('close', onClose)
      .on('error', onError)
}

export default Server
