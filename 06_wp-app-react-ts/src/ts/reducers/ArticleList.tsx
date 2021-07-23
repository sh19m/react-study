import {ArticleListActions} from "../actions/ArticleList";
import ActionTypes from "../actions/ActionTypes";


const initialState: StateType.ArticleListState = {
    posts: [],
    error: false,
}

// 最大表示記事数
const MAX_DISPLAY_POSTS: number = 20;

// 記事データを取得
const getPosts = (json: JsonType.PostsResponse | null): StateType.Post[] => {
    // NULLチェック
    const posts: StateType.Post[] = initialState.posts;
    if (json == null) return posts;
    // jsonからStateに変換
    const postsData: JsonType.Post[] = json.posts;
    // TODO リクエストで制御した方がよい
    const postsCount: number = json.posts.length < MAX_DISPLAY_POSTS ? json.posts.length : MAX_DISPLAY_POSTS;
    // 取得データを配列に格納
    for (let i = 0; i < postsCount; i++) {
        const post: JsonType.Post = postsData[i];
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
            categories: categories,
            date: post.date,
        });

    }
    return posts;
}

export default function articleListReducer(state: StateType.ArticleListState = initialState,
                                           action: ArticleListActions): StateType.ArticleListState {
    switch (action.type) {
        // リクエスト開始時に値を初期化
        case ActionTypes.START_POSTS_REQUEST:
            return {
                posts: [],
                error: false,
            };
            break;
        // データ受信時にPostデータを設定
        case ActionTypes.RECEIVE_POSTS_DATA:
            return action.payload.error
                ? {...state, error: true}
                : {...state, posts: getPosts(action.payload.json)};
            break;
        default:
            return state;
    }
}
