// @flow
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RecordData } from "../../entities";

export type State = {
  fetching: boolean;
  error?: string | null;
};

const initialState: State = {
  fetching: false,
  error: null,
};

const recordUiSlice = createSlice({
  name: "record/ui",
  initialState,
  reducers: {
    requestRegisterRecord: (
      _state: State,
      _action: PayloadAction<RecordData>
    ) => {
      return { fetching: true, error: null };
    },
    requestSearchRecord: () => {
      return { fetching: true, error: null };
    },
    success: (_state: State) => {
      return { fetching: false, error: null };
    },
    failure: (_state: State, action: PayloadAction<string>) => {
      return { fetching: false, error: action.payload };
    },
  },
});

export default {
  initialState,
  ...recordUiSlice,
};
