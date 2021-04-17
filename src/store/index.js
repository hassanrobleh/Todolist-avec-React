import * as reducers from './reducers';
import { combineReducers } from "redux";
import { createStore } from "redux";

const todoReducers = combineReducers(reducers);
const store = createStore(todoReducers);

export default store;