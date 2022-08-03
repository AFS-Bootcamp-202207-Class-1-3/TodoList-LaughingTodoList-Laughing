import { addTodo } from "./todoListSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoApi } from "../apis/TodoApi";

export default function TodoGenerator() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodoItem = () => {
    if (todo.length <= 0) {
      alert("输入不能为空");
      return;
    }

    addTodoApi({ text: todo }).then((res) => {
      dispatch(addTodo(res.data));
    });
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
