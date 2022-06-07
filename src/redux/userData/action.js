import { actionType } from "./actionType";

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

const userLogin = (userData) => {
  return (dispatch) => {
    dispatch(userLoginLoading());
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
        } else {
          dispatch(userLoginSuccess(data));
          localStorage.setItem("token", data.token);
        }
      })
      .catch((err) => {
        dispatch(userLoginFailure(err));
      });
  };
};

const userRegister = (userData) => {
  return (dispatch) => {
    dispatch(userRegisterLoading());
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
        } else {
          dispatch(userRegisterSuccess(data));
          localStorage.setItem("token", data.token);
        }
      })
      .catch((err) => {
        dispatch(userRegisterFailure(err));
      });
  };
};

const userLogoutAction = () => {
  return (dispatch) => {
    dispatch(userLogout());
    localStorage.removeItem("token");
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
};
