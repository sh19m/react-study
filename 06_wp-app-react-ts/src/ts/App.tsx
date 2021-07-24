import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
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
            <Switch>
                <Route exact path="/"
                       render={() => <ArticleList categorySlug={""}/>} />
                <Route exact path="/category/" render={() => <Redirect to="/" />} />
                <Route exact path="/category/:slug"
                       render={({match}) => <ArticleList categorySlug={match.params.slug}/>} />
            </Switch>
        </div>
    );
}
