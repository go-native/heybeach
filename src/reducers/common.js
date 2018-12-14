import {
  OPEN_REGISTER_MODAL,
  CLOSE_REGISTER_MODAL,
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL,
  SET_CONTENT_VISIBILITY
} from "../actions/common";

const initialState = {
  isRegisterOpen: false,
  isLoginOpen: false,
  isContentVisible: false
};

const common = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_REGISTER_MODAL:
      return { ...state, isRegisterOpen: true };
    case CLOSE_REGISTER_MODAL:
      return { ...state, isRegisterOpen: false };
    case OPEN_LOGIN_MODAL:
      return { ...state, isLoginOpen: true };
    case CLOSE_LOGIN_MODAL:
      return { ...state, isLoginOpen: false };
    case SET_CONTENT_VISIBILITY:
      return { ...state, isContentVisible: action.isContentVisible };
    default:
      return state;
  }
};

export default common;
