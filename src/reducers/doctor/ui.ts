// @flow
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginData, RegisterData } from "../../entities";

export type State = {
  fetching: boolean;
  error?: string | null;
};

const initialState: State = {
  fetching: false,
  error: null,
};

const doctorUiSlice = createSlice({
  name: "doctor/ui",
  initialState,
  reducers: {
    requestLogin: (_state: State, _action: PayloadAction<LoginData>) => {
      return { fetching: true, error: null };
    },
    requestRegister: (_state: State, _action: PayloadAction<RegisterData>) => {
      return { fetching: true, error: null };
    },
    success: (state: State) => {
      return { ...state, fetching: false };
    },
    failure: (_: State, action: PayloadAction<string>) => {
      return { fetching: false, error: action.payload };
    },
  },
});

export default {
  initialState,
  ...doctorUiSlice,
};
