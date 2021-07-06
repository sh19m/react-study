import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import TodoApp from './components/TodoApp';
import todoAppReducer from "./reducers/TodoApp";

// storeの作成
const store = createStore(
    todoAppReducer,
    applyMiddleware(logger, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
