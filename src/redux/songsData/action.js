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

const postNewSongSuccess = (songData) => {
  // set data to songsData
  return {
    type: actionType.POST_NEW_SONG_SUCCESS,
    payload: songData, // data from the server
  };
};

const postNewSongFailure = (error) => {
  // set error to true
  return {
    type: actionType.POST_NEW_SONG_FAILURE,
    error,
  };
};

const postNewSongLoading = () => {
  // set loading to true
  return {
    type: actionType.POST_NEW_SONG_LOADING,
  };
};

const postNewSong = (songData) => async (dispatch) => {
  // set loading to true
  dispatch(postNewSongLoading());
  try {
    const response = await fetch(
      "https://jsong-backend.herokuapp.com/api/songs/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(songData),
      }
    );
    const data = await response.json();
    dispatch(postNewSongSuccess(data));
  } catch (error) {
    dispatch(postNewSongFailure(error));
  }
};

const fetchSongs = (sortBy) => async (dispatch) => {
  dispatch(fetchSongDataLoading()); // set loading to true
  try {
    const res = await fetch("https://jsong-backend.herokuapp.com/api/songs/"); // fetching data from the server
    const data = await res.json();
    dispatch(fetchSongDataSucess(data));
    dispatch(sortSongData(sortBy)); // sort data
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
  sortSongData,
  postNewSong,
  postNewSongSuccess,
  postNewSongFailure,
  postNewSongLoading,
};
