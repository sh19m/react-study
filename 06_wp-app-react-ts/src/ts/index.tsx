import React from 'react';
import ReactDOM from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import * as reducers from "./reducers";
import App from "./App";
import '../styl/index.styl'

const store = createStore(
    combineReducers(reducers),
    applyMiddleware(logger, thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
