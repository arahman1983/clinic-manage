import { actionType } from "../actionTypes";

const initialState = {
  clinics : []
}

export default function clinicsReducer(state = initialState.clinics, action) {
  switch (action.type) {
    case actionType.ADD_CLINIC:
      return [ ...state, ...action.clinic ];
    case actionType.EDIT_CLINIC:
      const unChanged = state.filter(c => c.id !== action.id)
      return [ ...unChanged, {...action.clinic} ];
    case actionType.SET_CLINICS:
      return [...action.clinics];
    default:
      return state;
  }
}
