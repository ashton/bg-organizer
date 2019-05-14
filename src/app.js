import { httpListener } from '@marblejs/core'
import { bodyParser$ } from '@marblejs/middleware-body'

import api$ from 'api'

const middlewares = [
  bodyParser$()
]

const effects = [
  api$
]

export default httpListener({ middlewares, effects })
