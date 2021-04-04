import { combineReducers } from 'redux'
import clinicsReducer from './clinicReducer'
import langReducer from './languageReducer'

const rootReducer = combineReducers({
  lang : langReducer,
  clinics: clinicsReducer,
})
export default rootReducer
