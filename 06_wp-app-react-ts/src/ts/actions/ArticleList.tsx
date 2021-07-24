import {Action, Dispatch} from "redux";
import ActionTypes from "./ActionTypes";

// 記事データ取得URL
const POSTS_API_URL: string = 'https://public-api.wordpress.com/rest/v1.1/sites/elekibear.com/posts';

/**
 * リクエスト開始Action
 */
const startRequest = () => ({
    type: ActionTypes.START_POSTS_REQUEST,
    payload: {},
});

/**
 * データ受信完了Action
 */
const receiveData = (error: any, json: JsonType.PostsResponse | null) => ({
    type: ActionTypes.RECEIVE_POSTS_DATA,
    payload: { error, json },
});

/**
 * JSONデータ取得処理
 * @param url 取得対象のURL
 */
const fetchPostsJson = (url: string) => {
    return fetch(url)
        .then((response: Response) => {
            return response.json();
        })
        .catch((e: any) => {
            throw e;
        });
}

/**
 * 記事データを取得処理
 * @param categorySlug カテゴリースラッグ
 */
export function fetchPostData(categorySlug: string) {
    return async (dispatch: Dispatch<Action>) => {
        // リクエスト開始
        dispatch(startRequest());
        try {
            // URLからJSONを取得
            let url: string = POSTS_API_URL;
            // カテゴリースラッグをリクエストパラメータに追加
            if (categorySlug) {
                url += "?category=" + categorySlug;
            }
            const json: JsonType.PostsResponse = await fetchPostsJson(url);
            // データ受信完了
            dispatch(receiveData(null, json));
        } catch (e) {
            // エラー発生時
            dispatch(receiveData(e, null));
        }
    };
}

// ActionをUnionTypeで定義
export type ArticleListActions =
    ReturnType<typeof startRequest> |
    ReturnType<typeof receiveData>;
