import counterReducer from "./reducer/countReducer";
import { combineReducers, createStore } from "redux";

const combine = combineReducers({
  counter: counterReducer,
});

const store = createStore(combine);

export default store;
