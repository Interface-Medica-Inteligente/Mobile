import { combineReducers } from 'redux'

import doctor from './doctor'
import dialog from './dialog'
import attendance from './attendance'
import record from './record'
import recipe from './recipe'
import report from './report'

const reducers = combineReducers({
  doctor,
  dialog,
  attendance,
  record,
  recipe,
  report
})

export type State = ReturnType<typeof reducers>

export default reducers
