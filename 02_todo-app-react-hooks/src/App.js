import React, {useState, useCallback} from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export const TodoContext = React.createContext();

function App() {
  // state取得
  const [state, setState] = useState({tasks: [{ title: '寝る', id: 1 }], sequenceId: 1});

  /* タスク追加処理 */
  const addTodoItem = useCallback((title) => {
      // タスクの追加
      let uniqueId = state.sequenceId + 1;
      state.tasks.push({
        title,
        id: uniqueId,
      });
      // state再設定
      setState({tasks: state.tasks, sequenceId: uniqueId});
  }, [state]);

  /* タスク一覧リセット処理 */
  const resetTodoList = useCallback(() => {
      setState({tasks: [], sequenceId: 0});
  }, [state]);

  return (
      <TodoContext.Provider value={{addTodo: addTodoItem, tasks: state.tasks}}>
        <h1>TODO☆アプリ</h1>
        <button onClick={resetTodoList}>リセット</button>
        <TodoInput />
        <TodoList />
      </TodoContext.Provider>
  );
}
export default App;