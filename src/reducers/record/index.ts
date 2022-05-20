import { combineReducers } from 'redux'

import ui from './ui'
import entity from './entity'

export const Actions = {
  ui: ui.actions,
  entities: entity.actions
}

const reducers = combineReducers({
  ui: ui.reducer,
  entities: entity.reducer
})

export default reducers
