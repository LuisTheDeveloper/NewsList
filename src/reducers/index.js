import {
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  SET_SAVE_LIST,
} from "../actions/index";

const initialState = {
  news: ["Bitcoin", "Covid", "Machine Learning"],
  current: null,
  saveList: null,
  loading: false,
  error: null,
};

export function storiesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        current: null,
        loading: true,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        current: action.payload.articles.map((x, id) => {
          const container = {};
          container["id"] = id;
          container["author"] = x.author === null ? "???" : x.author;
          container["title"] = x.title;
          container["isChecked"] = false;
          return container;
        }),
        loading: false,
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        current: null,
        saveList: null,
        error: action.payload,
        loading: false,
      };
    case SET_SAVE_LIST:
      return {
        ...state,
        saveList: action.payload,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
}

export default storiesReducer;
