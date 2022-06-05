import { actionType } from "./actionType";

const init = {
  songsData: [],
  isError: false,
  isLoading: false,
};

export const songsReducer = (state = init, action) => {
  switch (action.type) {
    case actionType.FETCH_SONG_DATA_SUCCESS:
      return {
        ...state,
        songsData: action.songsData,
        isError: false,
        isLoading: false,
      };
    case actionType.FETCH_SONG_DATA_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case actionType.FETCH_SONG_DATA_RESET:
      return {
        ...state,
        songsData: [],
        isError: false,
        isLoading: false,
      };
    case actionType.FETCH_SONG_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
