import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { Actions as RecordActions } from "../reducers/record";
import { Actions as DialogActions } from "../reducers/dialog";
import { Actions as AttendanceActions } from "../reducers/attendance";

import Api from "../services/api";
import { transformRecord } from "../transforms";
import doctorSelector from "../selectors/doctorSelector";
import navigationService from "../services/navigationService";
import { PayloadAction } from "@reduxjs/toolkit";
import { RecordData } from "../entities";

function* requestRegisterRecord(action: PayloadAction<RecordData>): any {
  const { payload } = action;
  const doctorId: number = yield select(doctorSelector.getDoctorId);
  const response = yield call(Api.registerRecord, { doctorId, ...payload });

  if (!response.ok) {
    alert(response.data.error);
    yield put(RecordActions.ui.failure(response.data.error));
    return;
  }

  yield put(RecordActions.entities.setRecord(payload));
  yield put(AttendanceActions.entities.setAttendanceId(response.data));
  yield put(RecordActions.ui.success());
  navigationService.navigate("Receita");
}

function* requestSearchRecord(action: any): any {
  const { payload } = action;
  const response = yield call(Api.searchRecord, payload);

  if (!response.ok) {
    alert("Erro ao realizar busca");
    return;
  }

  const transformedData = transformRecord(response.data);
  yield put(RecordActions.entities.setRecord(transformedData));
  yield put(
    AttendanceActions.entities.setAttendanceId(response.data.idAtendimento)
  );
  yield put(DialogActions.ui.closeDialog());
}

export default function* sagas(): any {
  yield all([
    takeLatest(RecordActions.ui.requestSearchRecord, requestSearchRecord),
    takeLatest(RecordActions.ui.requestRegisterRecord, requestRegisterRecord),
  ]);
}
