import { combineReducers } from 'redux'

import entity from './entity'

export const Actions = {
  entities: entity.actions
}

const reducers = combineReducers({
  entities: entity.reducer
})

export default reducers
