import {actionType} from '../actionTypes'

export function setAppLang (isEnglish){
  return {
    type: actionType.SET_APP_LANGUAGE,
    IsEnglish: isEnglish
  }
}