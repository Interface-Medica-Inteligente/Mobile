// @flow
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type State = {
  attendanceId?: string
}

const initialState: State = {
  attendanceId: undefined
}

const attendanceUiSlice = createSlice({
  name: 'attendance/entity',
  initialState,
  reducers: {
    setAttendanceId: (state: State, action: PayloadAction<any>) => {
      return { ...state, attendanceId: action.payload }
    }
  }
})

export default {
  initialState,
  ...attendanceUiSlice
}
