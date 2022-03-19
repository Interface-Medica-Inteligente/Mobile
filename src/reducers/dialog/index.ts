import { combineReducers } from 'redux'

import ui from './ui'

export const Actions = {
  ui: ui.actions
}

const reducers = combineReducers({
  ui: ui.reducer
})

export default reducers
