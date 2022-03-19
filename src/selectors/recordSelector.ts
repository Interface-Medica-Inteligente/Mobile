import { State } from '../reducers'

const getRecord = (state: State) => state.record.entities

export default {
  getRecord
}
