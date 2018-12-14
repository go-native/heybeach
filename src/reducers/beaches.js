import {
  FETCH_BEACHES_SUCCESS,
  FETCH_BEACHES_REQUEST,
  FETCH_BEACHES_ERROR
} from "../actions/beaches";

const initialState = {
  beaches: [],
  isFetching: false,
  page: 0
};

const beaches = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEACHES_SUCCESS:
      return {
        ...state,
        beaches: state.beaches.concat(action.beaches.beaches),
        page: action.beaches.page,
        isFetching: false
      };
    case FETCH_BEACHES_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_BEACHES_ERROR:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

export default beaches;
