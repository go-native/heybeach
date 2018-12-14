export const OPEN_REGISTER_MODAL = "OPEN_REGISTER_MODAL";
export const CLOSE_REGISTER_MODAL = "CLOSE_REGISTER_MODAL";
export const OPEN_LOGIN_MODAL = "OPEN_LOGIN_MODAL";
export const CLOSE_LOGIN_MODAL = "CLOSE_LOGIN_MODAL";
export const SET_CONTENT_VISIBILITY = "SET_CONTENT_VISIBILITY";

export const openRegisterModal = () => ({
  type: OPEN_REGISTER_MODAL
});

export const closeRegisterModal = () => ({
  type: CLOSE_REGISTER_MODAL
});

export const openLoginModal = () => ({
  type: OPEN_LOGIN_MODAL
});

export const closeLoginModal = () => ({
  type: CLOSE_LOGIN_MODAL
});

export const setContentVisibility = isContentVisible => ({
  type: SET_CONTENT_VISIBILITY,
  isContentVisible
});
