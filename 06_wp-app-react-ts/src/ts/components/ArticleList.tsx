import React from "react";
import '../../styl/index.styl';

function ArticleList() {
    return (
        <div className="article-area">
            <div className="article-card">
                <div className="article-card-image">仮画像</div>
                <a className="article-card-title" href="https://elekibear.com/20210712_01">【React.js】第二回 Reactでアプリ開発！ 〜React×TypeScript環境を一から構築するぜ編〜</a>
                <div className="article-card-category"><span className="article-card-category-item">PC創作</span><span className="article-card-category-item">アプリ開発</span></div>
                <div className="article-card-date">2021.07.14</div>
            </div>
            <div className="article-card">
                <div className="article-card-image">仮画像</div>
                <a className="article-card-title" href="https://elekibear.com/20210712_01">【React.js】第二回 Reactでアプリ開発！ 〜React×TypeScript環境を一から構築するぜ編〜</a>
                <div className="article-card-category"><span className="article-card-category-item">PC創作</span><span className="article-card-category-item">アプリ開発</span></div>
                <div className="article-card-date">2021.07.14</div>
            </div>
            <div className="article-card">
                <div className="article-card-image">仮画像</div>
                <a className="article-card-title" href="https://elekibear.com/20210712_01">【React.js】第二回 Reactでアプリ開発！ 〜React×TypeScript環境を一から構築するぜ編〜</a>
                <div className="article-card-category"><span className="article-card-category-item">PC創作</span><span className="article-card-category-item">アプリ開発</span></div>
                <div className="article-card-date">2021.07.14</div>
            </div>
        </div>

    );
}
export default ArticleList;