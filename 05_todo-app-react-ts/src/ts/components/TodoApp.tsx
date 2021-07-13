import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {inputTask, addTask, resetTask, asyncAddTask} from "../actions/TodoApp";
import {TodoAppState} from "../reducers/TodoApp";

function TodoApp() {
    const dispatch = useDispatch();
    const task = useSelector((state: TodoAppState) => state.task);
    const tasks = useSelector((state: TodoAppState) => state.tasks);

    return (
      <div>
        <h1>TODO☆アプリ</h1>
        <button onClick={() => dispatch(resetTask())}>リセット</button>
        <br/>
        <input placeholder="タスクを入力するクマ"
               onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(inputTask(e.target.value))} />
        <button onClick={() => dispatch(asyncAddTask(task))}>追加</button>
        <ul>
            {
                tasks.map((item: string, i: number) => {
                    return <li key={i}>{item}</li>;
                })
            }
        </ul>
      </div>
    );
}
export default TodoApp;
