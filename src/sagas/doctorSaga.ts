// @flow
import type { Saga } from 'redux-saga'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { Actions } from '../reducers/doctor'
import Api from '../services/api'

function * requestLogin (action): Saga<*> {
  const { payload } = action
  const response = yield call(Api.login, payload)

  if (!response.ok) {
    alert('Erro ao realizar login')
    return
  }
  yield put(Actions.entities.setDoctor({ id: response.data }))
}

function * requestRegister (action): Saga<*> {
  const { payload } = action
  const response = yield call(Api.register, payload)

  if (!response.ok) {
    alert('Erro ao realizar o cadastro')
    return
  }
  yield put(Actions.entities.setDoctor({ id: response.data }))
}

export default function * sagas (): Saga<*> {
  yield all([
    takeLatest(Actions.ui.requestLogin, requestLogin),
    takeLatest(Actions.ui.requestRegister, requestRegister)
  ])
}
