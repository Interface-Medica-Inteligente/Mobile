// @flow
import type { Saga } from 'redux-saga'
import { all, call, takeLatest } from 'redux-saga/effects'
import { Actions as ReportActions } from '../reducers/report'
import Api from '../services/api'
import { downloadPDF } from '../utils'

function * requestRegisterReport (action): Saga<*> {
  const { payload } = action
  const response = yield call(Api.getReportPDF, payload)

  downloadPDF(response.data, 'laudo')
}

export default function * sagas (): Saga<*> {
  yield all([
    takeLatest(ReportActions.ui.requestRegisterReport, requestRegisterReport)
  ])
}
