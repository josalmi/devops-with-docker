import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { inProduction } from '../../util/common'
import { handleRequest } from './apiConnection'

import combinedReducers from './redux'

// eslint-disable-next-line
const composeEnhancers = (!inProduction && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(thunk, handleRequest)),
)

export default store
