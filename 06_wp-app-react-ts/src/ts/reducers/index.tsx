import {combineReducers} from "redux";
import articleListReducer from "./ArticleList"
import categoriesReducer from "./Categories";

// 全てのReducerを定義
let reducers = combineReducers({
    articleListState: articleListReducer,
    categoriesState: categoriesReducer
});
export default reducers;