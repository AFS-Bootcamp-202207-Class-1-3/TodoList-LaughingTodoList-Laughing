import { addTodo } from "./todoListSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoApi } from "../apis/TodoApi";
import { Button, notification } from "antd";

export default function TodoGenerator() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodoItem = () => {
    if (todo.length <= 0) {
      return notification.warning({
        message: `输入不能为空`,
      });
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
      <Button onClick={addTodoItem} type="primary" style={{ margin: "10px" }}>
        Add
      </Button>
    </div>
  );
}
