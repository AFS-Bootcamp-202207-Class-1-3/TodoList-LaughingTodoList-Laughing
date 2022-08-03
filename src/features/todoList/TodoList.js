import { useEffect } from "react";
import TodoGenerator from "./todoGenerator";
import TodoGroup from "./todoGroup";
import { getTodo } from "../apis/TodoApi";
import { useDispatch } from "react-redux";
import { addTodos } from "./todoListSlice";
export default function TodoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodo().then((res) => {
      console.log(res.data);
      dispatch(addTodos(res.data));
    });
  }, [dispatch]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>TODO List</h1>
      <TodoGenerator />
      <TodoGroup />
    </div>
  );
}
