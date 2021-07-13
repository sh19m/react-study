// TODO：参考ファイル。こういう書き方もある
// 子ノードの型をUnionTypeで取得する
type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never
// 関数の型を全て返す
type ReturnTypes<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any
        ? ReturnType<T[K]>
        : never
}
// 上記を組み合わせることで全ての関数型のUnionTypeが取得できる
export type CreatorsToActions<T> = Unbox<ReturnTypes<T>>
