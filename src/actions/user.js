import { baseURL } from "./../config.json";
import { request } from "./request";
import { closeLoginModal } from "./common.js";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOU_ERROR";

export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";

export const FETCH_ME_SUCCESS = "FETCH_ME_SUCCESS";
export const FETCH_ME_ERROR = "FETCH_ME_ERROR";

export const registerRequest = () => ({
  type: REGISTER_REQUEST
});

export const registerSuccess = user => ({
  type: REGISTER_SUCCESS,
  user
});

export const registerError = errors => ({
  type: REGISTER_ERROR,
  errors
});

export const setAccessToken = token => dispatch => {
  document.cookie = `JWT=${token}`;
};

export const register = user => dispatch => {
  return dispatch(request(`${baseURL}/user/register`, "POST", user))
    .then(res => {
      const token = res.headers.get("x-auth");
      if (token) {
        dispatch(setAccessToken(token));
      }
      return res.json();
    })
    .then(result => {
      dispatch(registerSuccess(result));
      dispatch(closeLoginModal());
    })
    .catch(err => {
      if (err.name === "ValidationError") {
        dispatch(registerError(err.errors));
      }
      // Here we can add other error handlers
      console.log(err);
    });
};

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user
});

export const loginError = errors => ({
  type: LOGIN_ERROR,
  errors
});

export const login = credentials => dispatch => {
  return dispatch(request(`${baseURL}/user/login`, "POST", credentials))
    .then(res => {
      const token = res.headers.get("x-auth");
      if (token) {
        dispatch(setAccessToken(token));
      }
      return res.json();
    })
    .then(result => {
      dispatch(loginSuccess(result));
      dispatch(closeLoginModal());
    })
    .catch(err => {
      dispatch(loginError({ general: { message: "Failed to login!" } }));
    });
};

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

export const logoutError = error => ({
  type: LOGOUT_ERROR,
  error
});

export const logout = () => dispatch => {
  return dispatch(request(`${baseURL}/user/logout`, "DELETE"))
    .then(res => dispatch(logoutSuccess()))
    .catch(error => {
      dispatch(logoutError(error));
    });
};

export const fetchMeSuccess = user => ({
  type: FETCH_ME_SUCCESS,
  user
});

export const fetchMeError = error => ({
  type: FETCH_ME_ERROR,
  error
});

export const fetchMe = () => dispatch => {
  return dispatch(request(`${baseURL}/user/me`, "GET"))
    .then(result => result.json())
    .then(result => dispatch(fetchMeSuccess(result)))
    .catch(err => {
      if (err.status === 401) {
        dispatch(setAccessToken(""));
        dispatch(fetchMeSuccess(null));
      } else {
        dispatch(fetchMeError());
      }
    });
};
