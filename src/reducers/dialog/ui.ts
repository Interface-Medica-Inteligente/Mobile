// @flow
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type State = {
  visible: boolean,
  type?: 'RECORD' | 'RECIPE' | 'REPORT' | null
}

const initialState: State = {
  visible: false,
  type: null
}

const dialogUiSlice = createSlice({
  name: 'dialog/ui',
  initialState,
  reducers: {
    openDialog: (_: any, action: PayloadAction<'RECORD' | 'RECIPE' | 'REPORT'>) => {
      return { visible: true, type: action.payload }
    },
    closeDialog: () => {
      return { visible: false, type: null }
    }
  }
})

export default {
  initialState,
  ...dialogUiSlice
}
