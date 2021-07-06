export const inputTask = (task) => ({
    type: 'INPUT_TASK',
    payload: {
        task
    }
});
export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: {
        task
    }
});
export const resetTask = () => ({
    type: 'RESET_TASK',
    payload: {}
});

// 非同期Action
export const asyncAddTask = (task) => {
    // 引数にdispatch、getStateを受け取ることができる
    return (dispatch, getState) => {
        setTimeout(() => {
            // 非同期処理が完了後にActionを実行
            dispatch(addTask(task));
        }, 500);
    };
}
