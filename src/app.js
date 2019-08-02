import { httpListener } from '@marblejs/core'
import { bodyParser$ } from '@marblejs/middleware-body'
import { cors$ } from '@marblejs/middleware-cors'

import api$ from 'api'
import { notFoundEffect$, errorHandler$ as error$ } from 'api/common/effects'

const middlewares = [
  bodyParser$(),
  cors$({
    origin: ['localhost:8080'],
    allowHeaders: '*',
    methods: ['HEAD', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
  })
]

const effects = [
  api$, 
  notFoundEffect$
]

export default httpListener({ middlewares, effects, error$ })
