import { actionType } from "../actionTypes";

const initialState = {
  id:0,
  titleAr: "",
  titleEn: "",
  LocationAr: "",
  LocationEn: "",
  phones: [],
  emails: [],
  doctors: [
    {
      drId:1,
      AvailableAppointments: [
        {
          date: "",
          times: [],
        },
      ],
    }
  ]
};

export default function langReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_CLINIC:
      return { ...action.clinic };
    case actionType.EDIT_CLINIC:
      return { ...state, ...action.clinic };
    case actionType.SET_CLINICS:
      return { ...state };
    default:
      return state;
  }
}
