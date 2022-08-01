import { Component } from "react";
import Todo from "./TODO";

export default class TodoList extends Component {
  state = {
    todo: "",
    List: [],
  };

  addTodo = () => {
    if (this.state.todo.length <= 0) {
      alert("输入不能为空");
      return;
    }
    this.setState({
      List: this.state.List.concat(this.state.todo),
      todo: "",
    });
    /*this.setState((prevState, props) => ({
      List: this.state.List.concat(this.state.todo),
    }));*/
  };

  removeTodo = (index) => {
    const newList = this.state.List.slice();
    newList.splice(index, 1);
    this.setState({ List: newList });
  };

  render() {
    const { todo, List } = this.state;
    const TodoList = List.map((element, index) => {
      return (
        <Todo
          key={index}
          content={element}
          remove={() => this.removeTodo(index)}
        ></Todo>
      );
    });
    return (
      <div style={{ textAlign: "center" }}>
        <h1>TODO List</h1>
        <input
          type="text"
          value={todo}
          onChange={(event) => this.setState({ todo: event.target.value })}
        />
        <button
          onClick={this.addTodo}
          style={{ background: "skyblue", margin: "10px" }}
        >
          Add
        </button>
        <div>{TodoList}</div>
      </div>
    );
  }
}
