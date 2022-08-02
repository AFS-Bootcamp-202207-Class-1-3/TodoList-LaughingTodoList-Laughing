import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, todoDone } from "./todoListSlice";
import "./style.css";
export default function TodoItem(props) {
  const todo = useSelector((state) => state.todoListSlice.todos[props.Index]);
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(deleteTodo(props.Index));
  };
  return (
    <div>
      <button
        className={todo.done === true ? "todoItem-done" : "todoItem-notdone"}
        onClick={() => dispatch(todoDone(props.Index))}
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
