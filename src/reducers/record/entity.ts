// @flow
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type State = {
  name: string,
  momName: string,
  dadName: string,
  birthDate: string,
  height: number,
  weight: number,
  cpf: string,
  genre: string
}

const initialState: State = {
  name: '',
  momName: '',
  dadName: '',
  birthDate: '',
  height: 0,
  weight: 0,
  cpf: '',
  genre: ''
}

const recordUiSlice = createSlice({
  name: 'record/entity',
  initialState,
  reducers: {
    setRecord: (state: State, action: PayloadAction<any>) => {
      return { ...state, ...action.payload }
    }
  }
})

export default {
  initialState,
  ...recordUiSlice
}
