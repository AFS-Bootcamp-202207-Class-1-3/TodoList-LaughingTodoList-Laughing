import { useEffect } from "react";
import TodoGenerator from "./todoGenerator";
import TodoGroup from "./todoGroup";
import { getTodoApi } from "../apis/TodoApi";
import { useDispatch } from "react-redux";
import { addTodos } from "./todoListSlice";
export default function TodoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodoApi().then((res) => {
      console.log(res.data);
      dispatch(addTodos(res.data));
    });
  }, [dispatch]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo List</h1>
      <TodoGenerator />
      <TodoGroup />
    </div>
  );
}
