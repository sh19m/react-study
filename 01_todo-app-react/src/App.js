import {Component} from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: '寝る', id: 1 },
      ],
      sequenceId: 1,
    };
    this.addTodoItem = this.addTodoItem.bind(this);
    this.resetTodoList = this.resetTodoList.bind(this);
  }

  /* タスク追加処理 */
  addTodoItem(title) {
    // state取得
    const {tasks, sequenceId} = this.state;
    // タスクの追加
    let uniqueId = sequenceId + 1;
    tasks.push({
      title,
      id: uniqueId,
    });
    // state再設定
    this.setState({tasks: tasks, sequenceId: uniqueId});
  }

  /* タスク一覧リセット処理 */
  resetTodoList() {
    this.setState({
      tasks: [],
      sequenceId: 0,
    });
  }

  render() {
    return (
        <div>
          <h1>TODO☆アプリ</h1>
          <button onClick={this.resetTodoList}>リセット</button>
          <TodoInput addTodo={this.addTodoItem} />
          <TodoList tasks={this.state.tasks} />
        </div>
    );
  }
}
export default App;