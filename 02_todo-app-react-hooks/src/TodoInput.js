import {useState, useContext} from 'react';
import {TodoContext} from "./App";

function TodoInput() {
    const todoContext = useContext(TodoContext);

    // state取得
    const [inputValue, setInputValue] = useState('');

    /* テキスト変更時のイベント */
    const inputValueChange = (e) => {
        setInputValue(e.target.value);
    }

    /* ボタン押下時のイベント */
    const addButtonClick = () => {
        todoContext.addTodo(inputValue);
    }

    return (
        <div>
            <input placeholder="タスクを入力するクマ" value={inputValue} onChange={inputValueChange} />
            <button onClick={addButtonClick}>追加</button>
        </div>
    );
}
export default TodoInput;