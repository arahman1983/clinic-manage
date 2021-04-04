import {actionType} from '../actionTypes'

const initialState = {
  isEnglish: true,
}

export default function langReducer(state = initialState.isEnglish, action) {
  switch (action.type) {
    case actionType.SET_APP_LANGUAGE:
      return { isEnglish: action.IsEnglish }
    default:
      return state
  }
}