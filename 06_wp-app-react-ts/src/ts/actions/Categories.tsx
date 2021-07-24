import {Action, Dispatch} from "redux";
import ActionTypes from "./ActionTypes";

// カテゴリー取得URL
const CATEGORY_API_URL: string = "https://public-api.wordpress.com/rest/v1.1/sites/elekibear.com/categories";

const startRequest = () => ({
    type: ActionTypes.START_CATEGORY_REQUEST,
    payload: {},
});
const receiveData = (error: any, json: JsonType.CategoryResponse | null) => ({
    type: ActionTypes.RECEIVE_CATEGORY_DATA,
    payload: { error, json },
});
const fetchCategoryJson = (url: string) => {
    return fetch(url)
        .then((response: Response) => {
            return response.json();
        })
        .catch((e: any) => {
            throw e;
        });
}

// カテゴリーデータを取得する
export function fetchCategoryData() {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(startRequest());
        try {
            const json: JsonType.CategoryResponse = await fetchCategoryJson(CATEGORY_API_URL);
            dispatch(receiveData(null, json));
        } catch (e) {
            dispatch(receiveData(e, null));
        }
    };
}

// カテゴリーを選択する
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
