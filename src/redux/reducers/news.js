import { EVERY_NEWS_STATE_CHANGE, TOP_NEWS_STATE_CHANGE } from "../constants";

const initialState = {
  everyNews: null,
  topNews: null,
};

export const news = (state = initialState, action) => {
  switch (action.type) {
    case EVERY_NEWS_STATE_CHANGE:
      return {
        ...state,
        everyNews: action.payload,
      };
    case TOP_NEWS_STATE_CHANGE:
      return {
        ...state,
        topNews: action.payload,
      };
    default:
      return state;
  }
};
