import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../../styl/index.styl';
import {fetchPostData} from "../actions/ArticleList";

const onClickPost = (url: string) => {
    window.open(url);
};

function ArticleList() {
    const dispatch = useDispatch();
    const posts = useSelector((state: StateType.ReducerState) => state.articleListState.posts);

    // レンダリング時に記事データを取得
    useEffect(() => {
        dispatch(fetchPostData());
    }, []);

    // 記事データロード中
    if (posts == null || Object.keys(posts).length == 0) {
        return (
            <div className="article-area">
                <div className="load-msg">Now Loading...</div>
            </div>
        );
    // 記事データの表示
    } else {
        return (
            <div className="article-area">
                {
                    posts.map((post: StateType.Post) => {
                        return (
                            <div key={post.id} className="article-card" onClick={() => onClickPost(post.url)}>
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
