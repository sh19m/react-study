import {ArticleListActions} from "../actions/ArticleList";
import ActionTypes from "../actions/ActionTypes";

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
    posts: Post[],
    error: boolean,
};
const initialState: ArticleListState = {
    posts: [],
    error: false,
}

// 最大表示記事数
const MAX_DISPLAY_POSTS: number = 20;

// 記事データを取得
const getPosts = (json: any): Post[] => {
    const posts: Post[] = [];
    const postsData: any = json.posts;
    // TODO リクエストで制御した方がよい
    const postsCount = json.posts.length < MAX_DISPLAY_POSTS ? json.posts.length : MAX_DISPLAY_POSTS;
    // 取得データを配列に格納
    for (let i = 0; i < postsCount; i++) {
        const post = postsData[i];
        // カテゴリー配列を取り出す
        const categories = Object.entries(post.terms.category).map(([name, category]: [string, any]) => {
            return {
                id: category.ID,
                name: name,
            }
        });
        // 記事データを格納
        posts.push({
            id: post.ID,
            title: post.title,
            url: post.URL,
            image: post.featured_image,
            categories: categories, // TODO
            date: post.date,
        });

    }
    return posts;
}

export default function articleListReducer(state: ArticleListState = initialState,
                                           action: ArticleListActions): ArticleListState {
    switch (action.type) {
        // リクエスト開始時に値を初期化
        case ActionTypes.START_REQUEST:
            return {
                posts: [],
                error: false,
            };
            break;
        // データ受信時にPostデータを設定
        case ActionTypes.RECEIVE_DATA:
            return action.payload.error
                ? {...state, error: true}
                : {...state, posts: getPosts(action.payload.json)};
            break;
        default:
            return state;
    }
}
