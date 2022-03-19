// @flow
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type State = {
  fetching: boolean,
  error?: string | null
}

const initialState: State = {
  fetching: false,
  error: null
}

const doctorUiSlice = createSlice({
  name: 'doctor/ui',
  initialState,
  reducers: {
    requestLogin: () => {
      return { fetching: true, error: null }
    },
    requestRegister: () => {
      return { fetching: true, error: null }
    },
    failure: (action: PayloadAction<string>) => {
      return { fetching: false, error: action.payload }
    }
  }
})

export default {
  initialState,
  ...doctorUiSlice
}
