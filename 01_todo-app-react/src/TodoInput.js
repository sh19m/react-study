import {Component} from 'react';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        // stateの定義とbind
        this.state = {
            inputValue: '',
        };
        this.inputValueChange = this.inputValueChange.bind(this);
        this.addButtonClick = this.addButtonClick.bind(this);
    }

    /* テキスト変更時のイベント */
    inputValueChange(e) {
        this.setState({
            inputValue: e.target.value,
        });
    }

    /* ボタン押下時のイベント */
    addButtonClick() {
        const inputValue = this.state.inputValue;
        this.props.addTodo(inputValue);
    }

    render() {
        return (
            <div>
                <input placeholder="タスクを入力するクマ" value={this.state.inputValue} onChange={this.inputValueChange} />
                <button onClick={this.addButtonClick}>追加</button>
            </div>
        );
    }
}
export default TodoInput;