import React from "react";
import {useSelector} from "react-redux";
import '../../styl/index.styl';
import {ReducerState} from "../reducers";
import {Post, PostCategory} from "../reducers/ArticleList";

function ArticleList() {
    const posts = useSelector((state: ReducerState) => state.articleListState.posts);

    return (
        <div className="article-area">
            {
                posts.map((post: Post) => {
                    return (
                        <div className="article-card">
                            <div className="article-card-image">{post.image}</div>
                            <a className="article-card-title" href={post.url}>{post.title}</a>
                            <div className="article-card-category">
                                {
                                    post.categories.map((category: PostCategory) => {
                                        return <span className="article-card-category-item">{category.name}</span>;
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
export default ArticleList;
