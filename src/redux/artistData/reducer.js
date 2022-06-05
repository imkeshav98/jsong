import { actionType } from "./actionType";

const init = {
  artistData: [],
  isError: false,
  isLoading: false,
};

export const artistReducer = (state = init, { type, payload }) => {
  switch (type) {
    case actionType.FETCH_ARTIST_DATA_SUCCESS:
      return {
        ...state,
        artistData: payload,
        isError: false,
        isLoading: false,
      };
    case actionType.FETCH_ARTIST_DATA_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case actionType.FETCH_ARTIST_DATA_RESET:
      return {
        ...state,
        artistData: [],
        isError: false,
        isLoading: false,
      };
    case actionType.FETCH_ARTIST_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
