export type Category = {
    id: number,
    name: string,
};
export type CategoriesState = {
    categories: Category[],
};
// TODO APIで取得する
const initialState: CategoriesState = {
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

export default function categoriesReducer(state: CategoriesState = initialState): CategoriesState {
    return state;
}
