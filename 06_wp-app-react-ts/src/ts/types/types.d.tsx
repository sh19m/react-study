/** State型定義 */
declare namespace StateType {
    /** ArticleList */
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
        error: boolean,
    };
    /** Categories */
    type Category = {
        id: number,
        name: string,
    };
    type CategoriesState = {
        categories: Category[],
    };
    /** 共通 */
    type ReducerState = {
        articleListState: ArticleListState,
        categoriesState: CategoriesState,
    }
}

/** JSON型定義 */
declare namespace JsonType {
    /** ArticleList */
    type Category = {
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
            category: Category[],
        },
        featured_image: string,
        date: string,
    };
    type PostsResponse = {
        posts: Post[],
    };
}