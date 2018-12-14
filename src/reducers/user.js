import {
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SET_ACCESS_TOKEN,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  FETCH_ME_SUCCESS,
  LOGOUT_SUCCESS
} from "../actions/user";

const initialState = {
  registerErrors: {},
  loginErrors: false,
  accessToken: null,
  user: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case REGISTER_SUCCESS:
      return { ...state, registerErrors: {}, user: action.user };
    case REGISTER_ERROR:
      return { ...state, registerErrors: action.errors };
    case SET_ACCESS_TOKEN:
      return { ...state, accessToken: action.accessToken };
    case LOGIN_REQUEST:
      return { ...state, loginErrors: {} };
    case LOGIN_SUCCESS:
      return { ...state, loginErrors: {}, user: action.user };
    case LOGIN_ERROR:
      return { ...state, loginErrors: action.errors };
    case FETCH_ME_SUCCESS:
      return { ...state, user: action.user };
    case LOGOUT_SUCCESS:
      return { ...state, accessToken: null, user: null };
    default:
      return state;
  }
};

export default user;
