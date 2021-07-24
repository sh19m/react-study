import {ArticleListActions} from "../actions/ArticleList";
import ActionTypes from "../actions/ActionTypes";

const initialState: StateType.ArticleListState = {
    posts: [],
    posts_display_count: 0,
    posts_all_count: 0,
    error: false,
}

/**
 * 記事データ取得処理
 * @param json 取得したJSONデータ
 */
const getPostsInfo = (json: JsonType.PostsResponse | null): StateType.ArticleListState => {
    // State定義
    const state: StateType.ArticleListState = {
        posts: [],
        posts_display_count: 0,
        posts_all_count: 0,
        error: false,
    };

    // JSONデータがNULLの場合、処理終了
    if (json == null) return state;

    // JSONデータからStateに変換して格納
    const postsData: JsonType.Post[] = json.posts;
    for (let i = 0; i < json.posts.length; i++) {
        // 記事データを取り出す
        const post: JsonType.Post = postsData[i];
        const categories = Object.entries(post.terms.category).map(([name, category]: [string, any]) => {
            return {
                id: category.ID,
                name: name,
            }
        });
        // 記事データを格納
        state.posts.push({
            id: post.ID,
            title: post.title,
            url: post.URL,
            image: post.featured_image,
            categories: categories,
            date: post.date,
        });
    }
    // 記事件数を設定
    state.posts_all_count = json.found;
    state.posts_display_count = state.posts.length;
    return state;
}

export default function articleListReducer(state: StateType.ArticleListState = initialState,
                                           action: ArticleListActions): StateType.ArticleListState {
    switch (action.type) {
        // リクエスト開始時に値を初期化
        case ActionTypes.START_POSTS_REQUEST:
            return {
                posts: [],
                posts_display_count: 0,
                posts_all_count: 0,
                error: false,
            };
        // データ受信時にPostデータを設定
        case ActionTypes.RECEIVE_POSTS_DATA:
            return action.payload.error
                ? {...state, error: true}
                : getPostsInfo(action.payload.json);
        default:
            return state;
    }
}
