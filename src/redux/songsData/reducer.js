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
        isError: payload, // payload is the error from the server
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
          let response;
          if (payload === "rating") {
            response = b.rating - a.rating; // sort by rating
          }
          return response;
        }),
      };

    case actionType.POST_NEW_SONG_SUCCESS:
      return {
        ...state,
        songsData: [...state.songsData, payload], // add new song to songsData
        isError: false, // reset error
        isLoading: false, // reset loading
      };
    case actionType.POST_NEW_SONG_FAILURE:
      return {
        ...state,
        isError: payload, // payload is the error from the server
        isLoading: false, // reset loading
      };
    case actionType.POST_NEW_SONG_RESET:
      return {
        ...state,
        isError: false, // reset error
        isLoading: false, // reset loading
      };
    case actionType.POST_NEW_SONG_LOADING:
      return {
        ...state,
        isLoading: true, // set loading to true
      };
    case actionType.RATE_SONG_SUCCESS:
      return {
        ...state,
        songsData: [...state.songsData].map((song) => {
          if (song._id === payload._id) {
            let newSong = { ...song };
            newSong.rating = payload.rating;
            return newSong;
          }
          return song; // keep the song
        }),
        isError: false, // reset error
        isLoading: false, // reset loading
      };
    case actionType.RATE_SONG_FAILURE:
      return {
        ...state,
        isError: payload, // payload is the error from the server
        isLoading: false, // reset loading
      };

    case actionType.RATE_SONG_LOADING:
      return {
        ...state,
        isLoading: true, // set loading to true
      };
    default:
      return state; // return the old state
  }
};
