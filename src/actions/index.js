export const FETCH_NEWS = "FETCH_NEWS";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";
export const SET_SAVE_LIST = "SET_SAVE_LIST";

export function fetchNewsAction(news) {
  return {
    type: FETCH_NEWS,
    payload: news,
  };
}

export function fetchNewsActionSuccess(news) {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: news,
  };
}

export function fetchNewsActionFailure(message) {
  return {
    type: FETCH_NEWS_FAILURE,
    payload: message,
  };
}

export function setSaveListAction(saveList) {
  return {
    type: SET_SAVE_LIST,
    payload: saveList,
  };
}
