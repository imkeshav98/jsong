import { actionType } from "./actionType";

const fetchSongDataSucess = (songData) => {
  return {
    type: actionType.FETCH_SONG_DATA_SUCCESS,
    songData,
  };
};

const fetchSongDataFailure = (error) => {
  return {
    type: actionType.FETCH_SONG_DATA_FAILURE,
    error,
  };
};

const fetchSongDataReset = () => {
  return {
    type: actionType.FETCH_SONG_DATA_RESET,
  };
};

const fetchSongDataLoading = () => {
  return {
    type: actionType.FETCH_SONG_DATA_LOADING,
  };
};

const fetchSongs = () => async (dispatch) => {
  dispatch(fetchSongDataLoading());
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    dispatch(fetchSongDataSucess(data));
  } catch (error) {
    dispatch(fetchSongDataFailure(error));
  }
};

export {
  fetchSongDataSucess,
  fetchSongDataFailure,
  fetchSongDataReset,
  fetchSongDataLoading,
  fetchSongs,
};
