import { news } from "./news";
import { combineReducers } from "redux";

const Reducers = combineReducers({
  newsListState: news,
});

export default Reducers;
