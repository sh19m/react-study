import {Action, Dispatch} from "redux";
import ActionTypes from "./ActionTypes";

// 記事データ取得URL
const API_URL: string = 'https://public-api.wordpress.com/rest/v1.1/sites/elekibear.com/posts';

const startRequest = () => ({
    type: ActionTypes.START_POSTS_REQUEST,
    payload: {},
});
const receiveData = (error: any, json: JsonType.PostsResponse | null) => ({
    type: ActionTypes.RECEIVE_POSTS_DATA,
    payload: { error, json },
});
const fetchPostsJson = (url: string) => {
    return fetch(url)
        .then((response: Response) => {
            return response.json();
        })
        .catch((e: any) => {
            throw e;
        });
}

// 記事データを取得する
export function fetchPostData(categoryName: string) {
    return async (dispatch: Dispatch<Action>) => {
        // リクエスト開始
        dispatch(startRequest());
        try {
            // API経由でJSONを取得
            let url: string = API_URL;
            // カテゴリー名が指定されていればURLに追加する
            if (categoryName) {
                url += "?category=" + categoryName;
            }
            console.log(url)
            const json: JsonType.PostsResponse = await fetchPostsJson(url);
            dispatch(receiveData(null, json));
        } catch (e) {
            // エラー内容を渡す
            dispatch(receiveData(e, null));
        }
    };
}

// ActionをUnionTypeで定義
export type ArticleListActions =
    ReturnType<typeof startRequest> |
    ReturnType<typeof receiveData>;
