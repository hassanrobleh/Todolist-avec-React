import * as reducers from "./reducers";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const todoReducers = combineReducers(reducers);

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(
  todoReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

/* const middleware1 = (dispatch, getState) => (next) => (action) => {
  console.log("action :", action);
  return next(action);
};

const middleware2 = (dispatch, getState) => (next) => (action) => {
  console.log("middleware2");
  return next(action);
};
let store = createStore(
  todoReducers,
  applyMiddleware(middleware1, middleware2)
); */

/* const middleware = (store) => (next) => (action) => {
  // Do something
  next(action);
}; */

/* const next = store.dispatch;
store.dispatch = (action) => {
  console.log("action :", action);
  return next(action);
}; */

/* middleware1(store);
middleware2(store); */

/* const myMiddleware = (store, middlewares) => {
  const mids = middlewares.slice();
  mids.reverse();
  let dispatch = store.dispatch;
  mids.forEach((m) => (dispatch = m(store)(dispatch)));
  return {
    ...store,
    dispatch,
  };
}; */

//store = myMiddleware(store, [middleware1, middleware2]);

export default store;
