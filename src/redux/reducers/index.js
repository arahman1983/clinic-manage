import { combineReducers } from 'redux'
import langReducer from './languageReducer'

const rootReducer = combineReducers({
  lang : langReducer,
})
export default rootReducer
