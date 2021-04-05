import { actionType } from "../actionTypes";

const initialState = {
  members : []
}

export default function membersReducer(state = initialState.members, action) {
  switch (action.type) {
    case actionType.ADD_MEMBER:
      return [ ...state, ...action.member ];
    case actionType.EDIT_MEMBER:
      const unChanged = state.filter(c => c.id !== action.id)
      return [ ...unChanged, {...action.member} ];
    case actionType.SET_MEMBERS:
      return [...action.members];
    default:
      return state;
  }
}
