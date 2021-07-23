import React from "react";
import {useSelector} from "react-redux";
import '../../styl/index.styl';

function Categories() {
    const categories = useSelector((state: StateType.ReducerState) => state.categoriesState.categories);

    return (
        <div className="category">
            {
                categories.map((category: StateType.Category) => {
                    return (
                        <React.Fragment key={category.id}>
                            <div className="category-item">{category.name}</div>
                        </React.Fragment>
                    );
                })
            }
        </div>
    );
}
export default Categories;
