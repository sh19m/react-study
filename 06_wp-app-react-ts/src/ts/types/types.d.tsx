/** Props型定義 */
declare namespace PropsType {
    type ArticleList ={
        categorySlug: string,
    }
}

/** State型定義 */
declare namespace StateType {
    // ArticleList
    type PostCategory = {
        id: number,
        name: string,
    };
    type Post = {
        id: number,
        title: string,
        url: string,
        image: string,
        categories: PostCategory[],
        date: string,
    };
    type ArticleListState = {
        posts: Post[],
        posts_display_count: number,
        posts_all_count: number,
        error: boolean,
    };
    // Categories
    type Category = {
        id: number,
        name: string,
        slug: string,
        is_selected: boolean,
    };
    type CategoriesState = {
        categories: Category[],
        error: boolean,
    };
    // 共通
    type ReducerState = {
        articleListState: ArticleListState,
        categoriesState: CategoriesState,
    }
}

/** JSON型定義 */
declare namespace JsonType {
    // ArticleList
    type PostCategory = {
        [k: string]: {
            ID: number,
            name: string,
        }
    };
    type Post = {
        ID: number,
        title: string,
        URL: string,
        terms: {
            category: PostCategory[],
        },
        featured_image: string,
        date: string,
    };
    type PostsResponse = {
        found: number,
        posts: Post[],
    };
    // Categories
    type Category = {
        ID: number,
        name: string,
        slug: string,
        parent: number,
    };
    type CategoriesResponse = {
        categories: Category[],
    };
}
