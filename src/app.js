import { httpListener } from '@marblejs/core'
import { bodyParser$ } from '@marblejs/middleware-body'
import { cors$ } from '@marblejs/middleware-cors'

import api$ from 'api'

const middlewares = [
  bodyParser$(),
  cors$({ origin: ['localhost:8080'] })
]

const effects = [
  api$
]

export default httpListener({ middlewares, effects })
