import { fetchartists } from "../artistData/action";
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
    payload: error,
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
    payload: error,
  };
};

const postNewSongLoading = () => {
  // set loading to true
  return {
    type: actionType.POST_NEW_SONG_LOADING,
  };
};

const rateSongSuccess = (songData) => {
  // set data to songsData
  return {
    type: actionType.RATE_SONG_SUCCESS,
    payload: songData, // data from the server
  };
};

const rateSongFailure = (error) => {
  // set error to true
  return {
    type: actionType.RATE_SONG_FAILURE,
    payload: error,
  };
};

const rateSongLoading = () => {
  // set loading to true
  return {
    type: actionType.RATE_SONG_LOADING,
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
    if (data.message) {
      dispatch(postNewSongFailure(data.message));
    }
    dispatch(postNewSongSuccess(data));
    dispatch(fetchartists());
  } catch (error) {
    dispatch(postNewSongFailure(error));
  }
};

const fetchSongs = () => async (dispatch) => {
  dispatch(fetchSongDataLoading()); // set loading to true
  try {
    const res = await fetch("https://jsong-backend.herokuapp.com/api/songs/"); // fetching data from the server
    const data = await res.json();
    if (data.message) {
      dispatch(fetchSongDataFailure(data.message));
    } else {
      dispatch(fetchSongDataSucess(data));
    }
  } catch (error) {
    dispatch(fetchSongDataFailure(error)); // set error to true
  }
};

const rateSong = (songData) => async (dispatch) => {
  dispatch(rateSongLoading()); // set loading to true
  try {
    const res = await fetch(
      "https://jsong-backend.herokuapp.com/api/songs/rating",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(songData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          dispatch(rateSongFailure(data.message));
        } else {
          dispatch(rateSongSuccess(data));
          dispatch(fetchartists());
          console.log(data);
        }
      });
  } catch (error) {
    dispatch(rateSongFailure(error));
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
  rateSong,
  rateSongSuccess,
  rateSongFailure,
  rateSongLoading,
};
