// TODO APIで取得する
const initialState: StateType.CategoriesState = {
    categories: [
        {
            id: 0,
            name: "ALL",
        },
        {
            id: 4,
            name: "PC制作",
        },
        {
            id: 44,
            name: "ゲーム・アプリ開発",
        },
    ]
}

export default function categoriesReducer(state: StateType.CategoriesState = initialState): StateType.CategoriesState {
    return state;
}
