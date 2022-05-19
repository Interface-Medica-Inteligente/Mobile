// @flow
import type { Saga } from "redux-saga";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { Actions as RecipeActions } from "../reducers/recipe";

import Api from "../services/api";
import { transformRecipes } from "../transforms";
import attendanceSelector from "../selectors/attendanceSelector";
import { downloadPDF } from "../utils";
import navigationService from "../services/navigationService";

function* requestRegisterRecipe(action: any): any {
  const { payload } = action;
  const attendanceId = yield select(attendanceSelector.getAttendanceId);
  const response = yield call(Api.registerRecipe, { attendanceId, ...payload });

  if (!response.ok) {
    alert("Erro ao realizar cadastro");
    yield put(RecipeActions.ui.failure("erro"));
    return;
  }

  yield put(RecipeActions.ui.success());
  navigationService.navigate("Laudo");
}

function* requestFilterRecipe(action: any): any {
  const { payload } = action;
  const attendanceId = yield select(attendanceSelector.getAttendanceId);
  const response = yield call(Api.searchRecipe, { attendanceId, ...payload });

  if (!response.ok) {
    alert("Erro ao realizar busca");
    yield put(RecipeActions.entities.setRecipes([]));
    return;
  }

  const transformedData = transformRecipes(response.data);
  yield put(RecipeActions.entities.setRecipes(transformedData));
}

function* requestRecipes(): any {
  const attendanceId = yield select(attendanceSelector.getAttendanceId);
  if (attendanceId) {
    const response = yield call(Api.getRecipes, { attendanceId });

    if (!response.ok) {
      alert("Erro ao realizar busca");
      return;
    }

    const transformedData = transformRecipes(response.data);
    yield put(RecipeActions.entities.setRecipes(transformedData));
  }
}

function* requestPDFRecipe(action: any): any {
  const { payload } = action;
  const response = yield call(Api.getRecipePDF, payload);

  downloadPDF(response.data, "receita");
}

export default function* sagas() {
  yield all([
    takeLatest(RecipeActions.ui.requestFilterRecipe, requestFilterRecipe),
    takeLatest(RecipeActions.ui.requestRecipes, requestRecipes),
    takeLatest(RecipeActions.ui.requestRegisterRecipe, requestRegisterRecipe),
    takeLatest(RecipeActions.ui.requestPDFRecipe, requestPDFRecipe),
  ]);
}
