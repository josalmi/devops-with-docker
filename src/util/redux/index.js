import { combineReducers } from 'redux'

import messages from './messageReducer'
import connectionTest from './simpleReducer'


export default combineReducers({
  messages,
  connectionTest
})
