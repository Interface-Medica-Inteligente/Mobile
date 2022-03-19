// @flow
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type State = {
  id?: number,
  crm?: string,
  token?: string
}

const initialState: State = {
  id: undefined,
  crm: undefined,
  token: undefined
}

const doctorUiSlice = createSlice({
  name: 'doctor/entity',
  initialState,
  reducers: {
    setDoctor: (state: State, action: PayloadAction<any>) => {
      return { ...state, ...action.payload }
    },
    logout: () => initialState
  }
})

export default {
  initialState,
  ...doctorUiSlice
}
