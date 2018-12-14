import { baseURL } from "./../config.json";
export const FETCH_BEACHES_REQUEST = "FETCH_BEACHES_REQUEST";
export const FETCH_BEACHES_SUCCESS = "FETCH_BEACHES_SUCCESS";
export const FETCH_BEACHES_ERROR = "FETCH_BEACHES_ERROR";

export const fetchBeachesRequest = () => ({
  type: FETCH_BEACHES_REQUEST
});

export const fetchBeachesSuccess = beaches => ({
  type: FETCH_BEACHES_SUCCESS,
  beaches
});

export const fetchBeachesError = error => ({
  type: FETCH_BEACHES_ERROR,
  error
});

export const fetchNextBeaches = () => (dispatch, getState) => {
  const { beaches } = getState();
  if (beaches.isFetching) return;
  let page = beaches.page + 1;
  dispatch(fetchBeachesRequest());
  return fetch(`${baseURL}/beaches?page=${page}`)
    .then(res => res.json())
    .then(result =>
      dispatch(fetchBeachesSuccess({ beaches: result, page: page }))
    )
    .catch(error => {
      dispatch(fetchBeachesError(error));
    });
};
