import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, todoDone } from "./todoListSlice";
import "./style.css";
import { deleteTodoApi, doneTodoApi } from "../apis/TodoApi";
export default function TodoItem(props) {
  const todo = useSelector((state) =>
    state.todoListSlice.todos.find((todo) => todo.id === props.id)
  );
  const dispatch = useDispatch();
  const remove = () => {
    deleteTodoApi(todo.id).then(() => {
      dispatch(deleteTodo(todo.id));
    });
  };

  const doneTodo = () => {
    doneTodoApi(todo).then((res) => {
      dispatch(todoDone(res.data.id));
    });
  };

  return (
    <div>
      <button
        className={todo.done === true ? "todoItem-done" : "todoItem-notdone"}
        onClick={doneTodo}
      >
        {todo.text}
      </button>
      <button
        style={{ background: "red", borderRadius: "100%", border: "none" }}
        onClick={remove}
      >
        -
      </button>
    </div>
  );
}
