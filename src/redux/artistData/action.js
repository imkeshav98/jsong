import { actionType } from "./actionType";

const fetchArtistDataSuccess = (artistData) => {
  return {
    type: actionType.FETCH_ARTIST_DATA_SUCCESS,
    artistData,
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

const fetchartists = () => async (dispatch) => {
  dispatch(fetchArtistDataLoading());
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    dispatch(fetchArtistDataSuccess(data));
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