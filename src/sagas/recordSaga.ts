// @flow
import type { Saga } from 'redux-saga'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { Actions as RecordActions } from '../reducers/record'
import { Actions as DialogActions } from '../reducers/dialog'
import { Actions as AttendanceActions } from '../reducers/attendance'

import Api from '../services/api'
import { transformRecord } from '../transforms'
import doctorSelector from '../selectors/doctorSelector'

function * requestRegisterRecord (action): Saga<*> {
  const { payload } = action
  const doctorId = yield select(doctorSelector.getDoctorId)
  const response = yield call(Api.registerRecord, { doctorId, ...payload })

  if (!response.ok) {
    alert('Erro ao cadastrar prontuário')
    return
  }
  console.log(response.data)
  alert("Cadastrado!")
  yield put(RecordActions.entities.setRecord(payload))
  yield put(AttendanceActions.entities.setAttendanceId(response.data))
}

function * requestSearchRecord (action): Saga<*> {
  const { payload } = action
  const response = yield call(Api.searchRecord, payload)

  if (!response.ok) {
    alert('Erro ao realizar busca')
    return
  }
  const transformedData = transformRecord(response.data)
  yield put(RecordActions.entities.setRecord(transformedData))
  yield put(AttendanceActions.entities.setAttendanceId(response.data.idAtendimento))
  yield put(DialogActions.ui.closeDialog())
}

export default function * sagas (): Saga<*> {
  yield all([
    takeLatest(RecordActions.ui.requestSearchRecord, requestSearchRecord),
    takeLatest(RecordActions.ui.requestRegisterRecord, requestRegisterRecord)
  ])
}
