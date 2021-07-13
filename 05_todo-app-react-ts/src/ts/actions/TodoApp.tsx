import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import ActionTypes from "./ActionTypes";

/* Action定義 */
export function inputTask(task: string) {
    return {
        type: ActionTypes.INPUT_TASK,
        payload: {
            task
        }
    };
}
export function addTask(task: string) {
    return {
        type: ActionTypes.ADD_TASK,
        payload: {
            task
        }
    };
}
export function resetTask() {
    return {
        type: ActionTypes.RESET_TASK,
        payload: {}
    };
}
export function asyncAddTask(task: string): ThunkAction<void, any, any, Action>  {
    return (dispatch: Dispatch<Action>) => {
        setTimeout(() => {
            dispatch(addTask(task));
        }, 500);
    };
}

// ActionをUnionTypeで型定義
// ※thunkを使ったActionにはtypeが含まれていないため省く
export type TodoAppActions =
    ReturnType<typeof inputTask> |
    ReturnType<typeof addTask> |
    ReturnType<typeof resetTask>;
