import { actionType } from "./actionType";
import { loadingStart, loadingEnd } from "../loading/action";

const userLoginLoading = () => {
  return {
    type: actionType.USER_LOGIN_LOADING,
  };
};

const userLoginSuccess = (userData) => {
  return {
    type: actionType.USER_LOGIN_SUCCESS,
    payload: userData,
  };
};

const userLoginFailure = (error) => {
  return {
    type: actionType.USER_LOGIN_FAILURE,
    payload: error,
  };
};

const userLoginReset = () => {
  return {
    type: actionType.USER_LOGIN_RESET,
  };
};

const userRegisterLoading = () => {
  return {
    type: actionType.USER_REGISTER_LOADING,
  };
};

const userRegisterSuccess = (userData) => {
  return {
    type: actionType.USER_REGISTER_SUCCESS,
    payload: userData,
  };
};

const userRegisterFailure = (error) => {
  return {
    type: actionType.USER_REGISTER_FAILURE,
    payload: error,
  };
};

const userRegisterReset = () => {
  return {
    type: actionType.USER_REGISTER_RESET,
  };
};

const userLogout = () => {
  return {
    type: actionType.USER_LOGOUT,
  };
};

const userTokenSuccess = (data) => {
  return {
    type: actionType.USER_TOKEN_SUCCESS,
    payload: data,
  };
};

const userTokenFailure = (message) => {
  return {
    type: actionType.USER_TOKEN_FAILURE,
    payload: message,
  };
};

const userLogin = (userData) => {
  return (dispatch) => {
    dispatch(userLoginLoading());
    dispatch(loadingStart());
    fetch("https://jsong-backend.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          dispatch(userLoginFailure(data.message));
          dispatch(loadingEnd());
        } else {
          dispatch(userLoginSuccess(data));
          localStorage.setItem("token", data.token);
          dispatch(loadingEnd());
        }
      })
      .catch((err) => {
        dispatch(userLoginFailure(err));
        dispatch(loadingEnd());
      });
  };
};

const userRegister = (userData) => {
  return (dispatch) => {
    dispatch(userRegisterLoading());
    dispatch(loadingStart());
    fetch("https://jsong-backend.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          dispatch(userRegisterFailure(data.message));
          dispatch(loadingEnd());
        } else {
          dispatch(userRegisterSuccess(data));
          localStorage.setItem("token", data.token);
          dispatch(loadingEnd());
        }
      })
      .catch((err) => {
        dispatch(userRegisterFailure(err));
        dispatch(loadingEnd());
      });
  };
};

const userLogoutAction = () => {
  return (dispatch) => {
    dispatch(userLogout());
    localStorage.removeItem("token");
  };
};

const userToken = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("https://jsong-backend.herokuapp.com/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            dispatch(userTokenFailure(data.message));
          } else {
            dispatch(userTokenSuccess(data.user));
          }
        })
        .catch((err) => {
          dispatch(userTokenFailure());
        });
    } else {
      dispatch(userTokenFailure());
    }
  };
};

export {
  userLogin,
  userLoginLoading,
  userLoginSuccess,
  userLoginFailure,
  userLoginReset,
  userLogout,
  userRegister,
  userRegisterLoading,
  userRegisterSuccess,
  userRegisterFailure,
  userRegisterReset,
  userLogoutAction,
  userToken,
  userTokenSuccess,
  userTokenFailure,
};
