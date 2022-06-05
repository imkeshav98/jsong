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
};
