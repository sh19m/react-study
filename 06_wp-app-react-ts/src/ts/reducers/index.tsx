import {combineReducers} from "redux";
import articleListReducer, {ArticleListState} from "./ArticleList"
import categoriesReducer, {CategoriesState} from "./Categories";

// useSelectorで取得するstateの型定義
export type ReducerState = {
    articleListState: ArticleListState,
    categoriesState: CategoriesState,
}
// 全てのReducerを定義
let reducers = combineReducers({
    articleListState: articleListReducer,
    categoriesState: categoriesReducer
});
export default reducers;