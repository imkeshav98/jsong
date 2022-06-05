import { actionType } from "./actionType";

const init = {
  userData: [],
  isError: false,
  isLoading: false,
};

export const userReducer = (state = init, action) => {
  switch (action.type) {
    case actionType.FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: action.userData,
        isError: false,
        isLoading: false,
      };
    case actionType.FETCH_USER_DATA_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case actionType.FETCH_USER_DATA_RESET:
      return {
        ...state,
        userData: [],
        isError: false,
        isLoading: false,
      };
    case actionType.FETCH_USER_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
