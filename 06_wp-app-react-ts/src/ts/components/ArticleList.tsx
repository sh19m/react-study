import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../../styl/index.styl';
import {fetchPostData} from "../actions/ArticleList";

function ArticleList(props: PropsType.ArticleList) {
    const dispatch = useDispatch();
    const state = useSelector((state: StateType.ReducerState) => state.articleListState);

    // レンダリング時に記事データを取得する
    useEffect(() => {
        dispatch(fetchPostData(props.categorySlug));
    }, [props.categorySlug]);

    if (state.error) {
        // エラー発生時
        return (
            <div className="article-area">
                <div className="err-msg">読込中にエラーが発生しました。</div>
            </div>
        );

    } else if (state.posts == null || Object.keys(state.posts).length == 0) {
        // 記事データロード中
        return (
            <div className="article-area">
                <div className="load-msg">Now Loading...</div>
            </div>
        );

    } else {
        // 記事データ取得後の表示
        return (
            <div className="article-area">
                <div className="article-count">検索結果 {state.posts_all_count} 件のうち {state.posts_display_count} 件を表示しています。</div>
                {
                    state.posts.map((post: StateType.Post) => {
                        return (
                            <div key={post.id} className="article-card" onClick={() => window.open(post.url)}>
                                <img className="article-card-image" src={post.image} />
                                <div className="article-card-title">{post.title}</div>
                                <div className="article-card-category">
                                    {
                                        post.categories.map((category: StateType.PostCategory) => {
                                            return <span key={category.id} className="article-card-category-item">{category.name}</span>;
                                        })
                                    }
                                </div>
                                <div className="article-card-date">{post.date.slice(0, 10)}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
export default ArticleList;
