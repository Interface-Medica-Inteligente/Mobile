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

const recordUiSlice = createSlice({
  name: 'record/ui',
  initialState,
  reducers: {
    requestRegisterRecord: () => {
      return { fetching: true, error: null }
    },
    requestSearchRecord: () => {
      return { fetching: true, error: null }
    },
    failure: (action: PayloadAction<string>) => {
      return { fetching: false, error: action.payload }
    }
  }
})

export default {
  initialState,
  ...recordUiSlice
}
