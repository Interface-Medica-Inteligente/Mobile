import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const middleware: any[] = [sagaMiddleware]

export default configureStore({
  reducer: reducers,
  middleware
})

sagaMiddleware.run(sagas)
