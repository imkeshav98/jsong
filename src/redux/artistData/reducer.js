import { actionType } from "./actionType";

const init = {
  artistsData: [],
  isError: false,
  isLoading: false,
};

export const artistReducer = (state = init, { type, payload }) => {
  switch (type) {
    case actionType.FETCH_ARTIST_DATA_SUCCESS:
      return {
        ...state,
        artistsData: payload,
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
        artistsData: [],
        isError: false,
        isLoading: false,
      };
    case actionType.FETCH_ARTIST_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.SORT_ARTIST_DATA:
      return {
        ...state,
        artistsData: state.artistsData.sort((a, b) => {
          if (payload === "rating") {
            return b.avgRating - a.avgRating;
          }
        }),
      };
    default:
      return state;
  }
};
