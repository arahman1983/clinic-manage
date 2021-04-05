import { combineReducers } from 'redux'
import clinicsReducer from './clinicReducer'
import langReducer from './languageReducer'
import membersReducer from './membersReducer'

const rootReducer = combineReducers({
  lang : langReducer,
  clinics: clinicsReducer,
  members: membersReducer
})
export default rootReducer
