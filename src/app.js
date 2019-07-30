import { httpListener } from '@marblejs/core'
import { bodyParser$ } from '@marblejs/middleware-body'

import api$ from 'api'
import { notFoundEffect$, errorHandler$ as error$ } from 'api/common/effects'

const middlewares = [
  bodyParser$()
]

const effects = [
  api$, 
  notFoundEffect$
]

export default httpListener({ middlewares, effects, error$ })
