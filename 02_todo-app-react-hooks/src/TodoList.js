import {useContext} from 'react';
import {TodoContext} from "./App";

function TodoList() {
    const todoContext = useContext(TodoContext);

    // tasksの内容から子要素を生成
    const todoItems = todoContext.tasks.map(task => {
        return <li key={task.id}>{task.title}</li>;
    });

    return (
        <div>
            <ul>
                {todoItems}
            </ul>
        </div>
    );
}
export default TodoList;