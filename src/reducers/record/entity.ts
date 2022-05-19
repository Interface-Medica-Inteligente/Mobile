// @flow
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RecordData } from "../../entities";

const initialState: RecordData = {
  name: "",
  momName: "",
  dadName: "",
  birthDate: "",
  height: 0,
  weight: 0,
  cpf: "",
  genre: null,
};

const recordUiSlice = createSlice({
  name: "record/entity",
  initialState,
  reducers: {
    setRecord: (state: RecordData, action: PayloadAction<RecordData>) => {
      return { ...state, ...action.payload };
    },
  },
});

export default {
  initialState,
  ...recordUiSlice,
};
