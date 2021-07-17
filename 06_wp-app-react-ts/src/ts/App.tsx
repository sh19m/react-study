import React from "react";
import ArticleList from "./components/ArticleList";
import Categories from "./components/Categories";
import '../styl/index.styl';

export default function App() {
    return (
        <div>
            <h1 className="title">都会のエレキベア</h1>
            <Categories />
            <ArticleList />
        </div>
    );
}
