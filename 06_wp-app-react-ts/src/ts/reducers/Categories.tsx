import {CategoriesActions} from "../actions/Categories";
import ActionTypes from "../actions/ActionTypes";

const initialState: StateType.CategoriesState = {
    categories: [
        {
            id: 0,
            name: "ALL",
            slug: "",
            is_selected: true,
        },
    ],
    error: false,
}

// カテゴリー取得
const getCategories = (json: JsonType.CategoryResponse | null): StateType.Category[] => {
    // NULLチェック
    const categories: StateType.Category[] = initialState.categories;
    if (json == null) return categories;
    // jsonからStateに変換
    const categoriesData: JsonType.Category[] = json.categories;
    for (let i = 0; i < categoriesData.length; i++) {
        const category: JsonType.Category = categoriesData[i];
        // 親カテゴリーのみ取り出す（ID1は未分類のため省く）
        if (category.parent == 0 && category.ID != 1) {
            categories.push({
                id: category.ID,
                name: category.name,
                slug: category.slug,
                is_selected: false,
            });
        }
    }
    // ID昇順でソート
    categories.sort(function(a, b) {
        if (a.id > b.id) {
            return 1;
        } else {
            return -1;
        }
    })
    return categories;
}

// カテゴリー選択
const selectCategory = (categories: StateType.Category[], selectCategoryId: number): StateType.Category[] => {
    // Stateのカテゴリーをコピー
    let changeCategories: StateType.Category[] = [...categories];
    // 選択されたIDの is_selected をtrueにして返却
    changeCategories.map((category: StateType.Category) => {
        category.is_selected = category.id == selectCategoryId;
    })
    return changeCategories;
}

export default function categoriesReducer(state: StateType.CategoriesState = initialState,
                                          action: CategoriesActions): StateType.CategoriesState {
    switch (action.type) {
        // リクエスト開始時に値を初期化
        case ActionTypes.START_CATEGORY_REQUEST:
            return {
                categories: [
                    {
                        id: 0,
                        name: "ALL",
                        slug: "",
                        is_selected: true,
                    },
                ],
                error: false,
            };
        // データ受信時にCategoryデータを設定
        case ActionTypes.RECEIVE_CATEGORY_DATA:
            return action.payload.error
                ? {...state, error: true}
                : {...state, categories: getCategories(action.payload.json)};
        // カテゴリー選択時
        case ActionTypes.SELECT_CATEGORY:
            return {
                ... state,
                categories: selectCategory(state.categories, action.payload.selectCategoryId),
                error: false,
            }
        default:
            return state;
    }
}
