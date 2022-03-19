import { State } from '../reducers'

const getAttendanceId = (state: State) => state.attendance.entities.attendanceId

export default {
  getAttendanceId
}
