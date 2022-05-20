import { State } from '../reducers'

const isVisible = (state: State) => state.dialog.ui.visible
const getType = (state: State) => state.dialog.ui.type

export default {
  isVisible,
  getType
}
