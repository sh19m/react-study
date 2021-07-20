import React from "react";
import ArticleList from "./components/ArticleList";
import Categories from "./components/Categories";
import '../styl/index.styl';

export default function App() {
    return (
        <div>
            <div className="app-bar">
                <div className="title">都会のエレキベア</div>
            </div>
            <Categories />
            <ArticleList />
        </div>
    );
}
