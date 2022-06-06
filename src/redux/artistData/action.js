import { actionType } from "./actionType";

const fetchArtistDataSuccess = (artistData) => {
  return {
    type: actionType.FETCH_ARTIST_DATA_SUCCESS,
    payload: artistData,
  };
};

const fetchArtistDataFailure = (error) => {
  return {
    type: actionType.FETCH_ARTIST_DATA_FAILURE,
    error,
  };
};

const fetchArtistDataReset = () => {
  return {
    type: actionType.FETCH_ARTIST_DATA_RESET,
  };
};
const fetchArtistDataLoading = () => {
  return {
    type: actionType.FETCH_ARTIST_DATA_LOADING,
  };
};

const sortArtistData = (sortBy) => {
  return {
    type: actionType.SORT_ARTIST_DATA,
    payload: sortBy,
  };
};

const postNewArtistSuccess = (artistData) => {
  return {
    type: actionType.POST_NEW_ARTIST_SUCCESS,
    payload: artistData,
  };
};

const postNewArtistFailure = (error) => {
  return {
    type: actionType.POST_NEW_ARTIST_FAILURE,
    error,
  };
};

const postNewArtistLoading = () => {
  return {
    type: actionType.POST_NEW_ARTIST_LOADING,
  };
};

const postNewArtist = (artistData) => async (dispatch) => {
  dispatch(postNewArtistLoading());
  try {
    const response = await fetch(
      "https://jsong-backend.herokuapp.com/api/artists/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(artistData),
      }
    );
    const data = await response.json();
    dispatch(postNewArtistSuccess(data));
  } catch (error) {
    dispatch(postNewArtistFailure(error));
  }
};

const fetchartists = (sortby) => async (dispatch) => {
  dispatch(fetchArtistDataLoading());
  try {
    const res = await fetch("https://jsong-backend.herokuapp.com/api/artists/");
    const data = await res.json();
    dispatch(fetchArtistDataSuccess(data));
    dispatch(sortArtistData(sortby));
  } catch (error) {
    dispatch(fetchArtistDataFailure(error));
  }
};

export {
  fetchArtistDataSuccess,
  fetchArtistDataFailure,
  fetchArtistDataReset,
  fetchArtistDataLoading,
  fetchartists,
  sortArtistData,
  postNewArtistSuccess,
  postNewArtistFailure,
  postNewArtistLoading,
  postNewArtist,
};
