import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../../styl/index.styl';
import {fetchCategoryData} from "../actions/Categories";

function Categories() {
    const dispatch = useDispatch();
    const categories = useSelector((state: StateType.ReducerState) => state.categoriesState.categories);

    // レンダリング時にカテゴリーデータを取得
    useEffect(() => {
        dispatch(fetchCategoryData());
    }, []);

    return (
        <div className="category">
            {
                categories.map((category: StateType.Category) => {
                    return (
                        <React.Fragment key={category.id}>
                            <button type="button" className="category-item" disabled={category.is_selected}>{category.name}</button>
                        </React.Fragment>
                    );
                })
            }
        </div>
    );
}
export default Categories;
