import React from "react";
import {useSelector} from "react-redux";
import '../../styl/index.styl';
import {ReducerState} from "../reducers";
import {Category} from "../reducers/Categories";

function Categories() {
    const categories = useSelector((state: ReducerState) => state.categoriesState.categories);

    return (
        <div className="category">
            {
                categories.map((category: Category) => {
                    return (
                        <React.Fragment key={category.id}>
                            <span className="category-border">|</span>
                            <div className="category-item">{category.name}</div>
                        </React.Fragment>
                    );
                })

            }
        </div>
    );
}
export default Categories;
