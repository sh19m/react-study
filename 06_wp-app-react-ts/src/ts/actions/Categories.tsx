import {Action, Dispatch} from "redux";
import ActionTypes from "./ActionTypes";

// カテゴリー取得URL
const CATEGORY_API_URL: string = "https://public-api.wordpress.com/rest/v1.1/sites/elekibear.com/categories";

/**
 * リクエスト開始Action
 */
const startRequest = () => ({
    type: ActionTypes.START_CATEGORY_REQUEST,
    payload: {},
});

/**
 * データ受信完了Action
 */
const receiveData = (error: any, json: JsonType.CategoriesResponse | null) => ({
    type: ActionTypes.RECEIVE_CATEGORY_DATA,
    payload: { error, json },
});

/**
 * JSONデータ取得処理
 * @param url 取得対象のURL
 */
const fetchCategoryJson = (url: string) => {
    return fetch(url)
        .then((response: Response) => {
            return response.json();
        })
        .catch((e: any) => {
            throw e;
        });
}

/**
 * カテゴリー情報取得処理
 */
export function fetchCategoryData() {
    return async (dispatch: Dispatch<Action>) => {
        // リクエスト開始
        dispatch(startRequest());
        try {
            // URLからJSONを取得
            const json: JsonType.CategoriesResponse = await fetchCategoryJson(CATEGORY_API_URL);
            // データ受信完了
            dispatch(receiveData(null, json));
        } catch (e) {
            // エラー発生時
            dispatch(receiveData(e, null));
        }
    };
}

/**
 * カテゴリー選択処理
 * @param selectCategoryId 選択したカテゴリーID
 */
export function selectCategoryId(selectCategoryId: number) {
    return {
        type: ActionTypes.SELECT_CATEGORY,
        payload: {selectCategoryId},
    };
}

// ActionをUnionTypeで定義
export type CategoriesActions =
    ReturnType<typeof startRequest> |
    ReturnType<typeof receiveData> |
    ReturnType<typeof selectCategoryId>;
