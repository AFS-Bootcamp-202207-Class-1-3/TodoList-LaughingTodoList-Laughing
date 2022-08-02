import { addTodo } from "./todoListSlice";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function TodoGenerator() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodoItem = () => {
    if (todo.length <= 0) {
      alert("输入不能为空");
      return;
    }
    dispatch(addTodo({ id: uuidv4(), done: false, text: todo }));
    setTodo("");
  };

  return (
    <div>
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
    </div>
  );
}
