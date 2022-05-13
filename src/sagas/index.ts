// @flow
import { all } from 'redux-saga/effects'

import doctorSaga from './doctorSaga'
import recordSaga from './recordSaga'
import recipeSaga from './recipeSaga'
import reportSaga from './reportSaga'

import type { Saga } from 'redux-saga'

export default function * root () {
  yield all([
    doctorSaga(),
    recordSaga(),
    recipeSaga(),
    reportSaga()
  ])
}
