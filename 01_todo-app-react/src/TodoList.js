function TodoList(props) {
    // tasksの内容から子要素を生成
    const todoItems = props.tasks.map(task => {
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