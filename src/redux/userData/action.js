import { actionType } from "./actionType";

const fechUserDataSuccess = (userData) => {
  return {
    type: actionType.FETCH_USER_DATA_SUCCESS,
    userData,
  };
};

const fechUserDataFailure = () => {
  return {
    type: actionType.FETCH_USER_DATA_FAILURE,
  };
};

const fechUserDataReset = () => {
  return {
    type: actionType.FETCH_USER_DATA_RESET,
  };
};

const fechUserDataLoading = () => {
  return {
    type: actionType.FETCH_USER_DATA_LOADING,
  };
};

const fechUserData = (userId) => {
  return (dispatch) => {
    dispatch(fechUserDataLoading());
    fetch(`https://api.spotify.com/v1/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((userData) => dispatch(fechUserDataSuccess(userData)))
      .catch(() => dispatch(fechUserDataFailure()));
  };
};

export {
  fechUserDataSuccess,
  fechUserDataFailure,
  fechUserDataReset,
  fechUserDataLoading,
  fechUserData,
};
