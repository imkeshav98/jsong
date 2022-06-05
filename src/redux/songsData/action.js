import { actionType } from "./actionType";

const fetchSongDataSucess = (songData) => {
  // set data to songsData
  return {
    type: actionType.FETCH_SONG_DATA_SUCCESS,
    payload: songData, // data from the server
  };
};

const fetchSongDataFailure = (error) => {
  // set error to true
  return {
    type: actionType.FETCH_SONG_DATA_FAILURE,
    error,
  };
};

const fetchSongDataReset = () => {
  // reset data
  return {
    type: actionType.FETCH_SONG_DATA_RESET,
  };
};

const fetchSongDataLoading = () => {
  // set loading to true
  return {
    type: actionType.FETCH_SONG_DATA_LOADING,
  };
};

const sortSongData = (sortBy) => {
  // sort data
  return {
    type: actionType.SORT_SONG_DATA,
    payload: sortBy,
  };
};

const fetchSongs = () => async (dispatch) => {
  dispatch(fetchSongDataLoading()); // set loading to true
  try {
    const res = await fetch("https://jsong-backend.herokuapp.com/api/songs/"); // fetching data from the server
    const data = await res.json();
    dispatch(fetchSongDataSucess(data));
    dispatch(sortSongData("rating")); // default sort by rating
  } catch (error) {
    dispatch(fetchSongDataFailure(error)); // set error to true
  }
};

export {
  fetchSongDataSucess,
  fetchSongDataFailure,
  fetchSongDataReset,
  fetchSongDataLoading,
  fetchSongs,
};
