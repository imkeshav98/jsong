import { actionType } from "./actionType";

const init = {
  songsData: [],
  isError: false,
  isLoading: false,
};

export const songsReducer = (state = init, { type, payload }) => {
  switch (type) {
    case actionType.FETCH_SONG_DATA_SUCCESS:
      return {
        ...state, // keep the old state
        songsData: payload, // payload is the data from the server
        isError: false, // reset error
        isLoading: false, // reset loading
      };
    case actionType.FETCH_SONG_DATA_FAILURE:
      return {
        ...state,
        isError: true, // set error to true
        isLoading: false, // reset loading
      };
    case actionType.FETCH_SONG_DATA_RESET:
      return {
        ...state,
        songsData: [], // reset songsData
        isError: false, // reset error
        isLoading: false, // reset loading
      };
    case actionType.FETCH_SONG_DATA_LOADING:
      return {
        ...state,
        isLoading: true, // set loading to true
      };

    case actionType.SORT_SONG_DATA:
      return {
        ...state,
        songsData: [...state.songsData].sort((a, b) => {
          if (payload === "rating") {
            return b.rating - a.rating; // sort by rating
          }
        }),
      };
    default:
      return state; // return the old state
  }
};
