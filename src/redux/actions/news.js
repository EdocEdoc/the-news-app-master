import { EVERY_NEWS_STATE_CHANGE, TOP_NEWS_STATE_CHANGE } from "../constants";

export const SET_EVERY_NEWS = (receivedData) => async (dispatch) => {
  try {
    await dispatch({ type: EVERY_NEWS_STATE_CHANGE, payload: receivedData });
  } catch (error) {}
};

export const SET_TOP_NEWS = (receivedData) => async (dispatch) => {
  try {
    await dispatch({ type: TOP_NEWS_STATE_CHANGE, payload: receivedData });
  } catch (error) {}
};
