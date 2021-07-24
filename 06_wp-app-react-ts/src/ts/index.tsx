import React from 'react';
import ReactDOM from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import App from "./App";
import articleListReducer from "./reducers/ArticleList";
import categoriesReducer from "./reducers/Categories";

// 全てのReducerを定義
let reducers = combineReducers({
    articleListState: articleListReducer,
    categoriesState: categoriesReducer
});

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
