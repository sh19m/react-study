import React from 'react';
import ReactDOM from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import App from "./App";
import reducers from "./reducers";
import '../styl/index.styl'

const store = createStore(
    reducers,
    applyMiddleware(logger, thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
