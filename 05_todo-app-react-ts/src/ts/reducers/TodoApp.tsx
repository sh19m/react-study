import {TodoAppActions} from "../actions/TodoApp";
import ActionTypes from "../actions/ActionTypes";

// stateの型定義
export type TodoAppState = {
    task: string,
    tasks: string[]
};
const initialState: TodoAppState = {
    task: '',
    tasks: []
};
export default function todoAppReducer(state: TodoAppState = initialState, action: TodoAppActions): TodoAppState {
    switch (action.type) {
        case ActionTypes.INPUT_TASK:
            return {
                ...state,
                task: action.payload.task
            };
        case ActionTypes.ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            };
        case ActionTypes.RESET_TASK:
            return {
                ...state,
                tasks: []
            };
        default:
            return state;
    }
}
