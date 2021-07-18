export type PostCategory = {
    id: number,
    name: string,
};
export type Post = {
    id: number,
    title: string,
    url: string,
    image: string,
    categories: PostCategory[],
    date: string,
};
export type ArticleListState = {
    posts: Post[]
};
// TODO APIで取得する
const initialState: ArticleListState = {
    posts: [
        {
            id: 1,
            title: "【React.js】第二回 Reactでアプリ開発！ 〜React×TypeScript環境を一から構築するぜ編〜",
            url: "https://elekibear.com/20210712_01",
            image: "仮画像", // TODO 本来はURLが入る
            categories: [
                {
                    id: 1,
                    name: "PC創作",
                },
                {
                    id: 2,
                    name: "ゲーム・アプリ開発",
                },
            ],
            date: "2020-05-31T21:56:04+09:00",
        },
        {
            id: 2,
            title: "【React.js】第二回 Reactでアプリ開発！ 〜React×TypeScript環境を一から構築するぜ編〜",
            url: "https://elekibear.com/20210712_01",
            image: "仮画像", // TODO 本来はURLが入る
            categories: [
                {
                    id: 1,
                    name: "PC創作",
                },
                {
                    id: 2,
                    name: "ゲーム・アプリ開発",
                },
            ],
            date: "2020-05-31T21:56:04+09:00",
        },
        {
            id: 3,
            title: "【React.js】第二回 Reactでアプリ開発！ 〜React×TypeScript環境を一から構築するぜ編〜",
            url: "https://elekibear.com/20210712_01",
            image: "仮画像", // TODO 本来はURLが入る
            categories: [
                {
                    id: 1,
                    name: "PC創作",
                },
                {
                    id: 2,
                    name: "ゲーム・アプリ開発",
                },
            ],
            date: "2020-05-31T21:56:04+09:00",
        },
    ]
}

export default function articleListReducer(state: ArticleListState = initialState): ArticleListState {
    return state;
}
