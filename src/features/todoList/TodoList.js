import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { addTodo } from "./todoListSLice";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const List = useSelector((state) => state.todoListSlice.todos);
  const addTodoItem = () => {
    if (todo.length <= 0) {
      alert("输入不能为空");
      return;
    }
    dispatch(addTodo({ id: uuidv4(), done: false, text: todo }));
    setTodo("");
  };

  /*const removeTodo = (index) => {
    const newList = data.List.slice();
    newList.splice(index, 1);
    setData({ ...data, List: newList });
  };*/

  const TodoList = List.map((element, index) => {
    return <TodoItem key={element.id} Index={index}></TodoItem>;
  });
  return (
    <div style={{ textAlign: "center" }}>
      <h1>TODO List</h1>
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        placeholder="输入Todo"
      />
      <button
        onClick={addTodoItem}
        style={{ background: "skyblue", margin: "10px" }}
      >
        Add
      </button>
      <div>{TodoList}</div>
    </div>
  );
}
