// @flow
import { PayloadAction } from "@reduxjs/toolkit";
import { Saga } from "redux-saga";
import {
  all,
  call,
  delay,
  put,
  SagaReturnType,
  takeLatest,
} from "redux-saga/effects";
import { LoginData, RegisterData } from "../entities";
import { Actions } from "../reducers/doctor";
import Api from "../services/api";
import navigationService from "../services/navigationService";

function* requestLogin(action: PayloadAction<LoginData>): any {
  const { payload } = action;
  const response = yield call(Api.login, payload);

  if (!response.ok) {
    alert(response.data?.errors[0]);
    yield put(Actions.ui.failure(response.data.errors[0]));
    return;
  }
  yield put(Actions.entities.setDoctor({ id: response.data }));
  yield put(Actions.ui.success());
  navigationService.resetStack({});
}

function* requestRegister(action: PayloadAction<RegisterData>): any {
  const { payload } = action;
  const response = yield call(Api.register, payload);

  if (!response.ok) {
    console.log(response.data);
    alert(response.data?.errors[0]);
    yield put(Actions.ui.failure(response.data.errors[0]));
    return;
  }
  yield put(Actions.entities.setDoctor({ id: response.data }));
  yield put(Actions.ui.success());
  navigationService.resetStack({});
}

export default function* sagas() {
  yield all([
    takeLatest(Actions.ui.requestLogin, requestLogin),
    takeLatest(Actions.ui.requestRegister, requestRegister),
  ]);
}
