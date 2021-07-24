import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import '../../styl/index.styl';
import {fetchCategoryData, selectCategoryId} from "../actions/Categories";

function Categories() {
    const dispatch = useDispatch();
    const categories = useSelector((state: StateType.ReducerState) => state.categoriesState.categories);
    const history = useHistory();

    // レンダリング時にカテゴリーデータを取得する
    useEffect(() => {
        dispatch(fetchCategoryData());
    }, []);

    // 押下されたカテゴリーページに遷移する
    const pushCategoryPage = (selectCategory: StateType.Category): void => {
        dispatch(selectCategoryId(selectCategory.id));
        history.push(`/category/${selectCategory.slug}`)
    };

    // カテゴリーの表示
    return (
        <div className="category">
            {
                categories.map((category: StateType.Category) => {
                    return (
                        <React.Fragment key={category.id}>
                            <button type="button" className="category-item"
                                    disabled={category.is_selected}
                                    onClick={() => pushCategoryPage(category)}>{category.name}</button>
                        </React.Fragment>
                    );
                })
            }
        </div>
    );
}
export default Categories;
