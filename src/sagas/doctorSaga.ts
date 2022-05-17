// @flow
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Actions } from "../reducers/doctor";
import Api from "../services/api";
import navigationService from "../services/navigationService";

function* requestLogin(action: any) {
  const { payload } = action;
  const response = yield call(Api.login, payload);

  if (!response.ok) {
    alert("Erro ao realizar login");
    return;
  }
  yield put(Actions.entities.setDoctor({ id: response.data }));
  navigationService.resetStack({});
}

function* requestRegister(action: any) {
  const { payload } = action;
  const response = yield call(Api.register, payload);

  if (!response.ok) {
    alert("Erro ao realizar o cadastro");
    return;
  }
  yield put(Actions.entities.setDoctor({ id: response.data }));
  navigationService.resetStack({});
}

export default function* sagas() {
  yield all([
    takeLatest(Actions.ui.requestLogin, requestLogin),
    takeLatest(Actions.ui.requestRegister, requestRegister),
  ]);
}
