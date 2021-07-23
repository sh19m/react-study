import { Action, Dispatch } from "redux";
import ActionTypes from "./ActionTypes";

const API_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/elekibear.com/posts';

const startRequest = () => ({
    type: ActionTypes.START_REQUEST,
    payload: {},
});
const receiveData = (error: any, json: JsonType.PostsResponse | null) => ({
    type: ActionTypes.RECEIVE_DATA,
    payload: { error, json },
});

// URLからJSONを取得する
const fetchJsonFromURL = (url: string) => {
    return fetch(url)
        .then((response: Response) => {
            return response.json();
        })
        .catch((e: any) => {
            console.log(e);
            throw e;
        });
}

// 記事データを取得する
export function fetchPostData() {
    return async (dispatch: Dispatch<Action>) => {
        // リクエスト開始
        dispatch(startRequest());
        console.log("start request!!");
        try {
            // API経由でJSONを取得
            const json: JsonType.PostsResponse = await fetchJsonFromURL(API_URL);
            console.log("success fetch json!!");
            dispatch(receiveData(null, json));
        } catch (e) {
            // エラー内容を渡す
            console.log("failed fetch json!!");
            dispatch(receiveData(e, null));
        }
    };
};

// ActionをUnionTypeで定義
export type ArticleListActions =
    ReturnType<typeof startRequest> |
    ReturnType<typeof receiveData>;
