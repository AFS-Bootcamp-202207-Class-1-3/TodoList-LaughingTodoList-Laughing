import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, todoDone } from "./todoListSLice";
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
        className="todoItem"
        onClick={() => dispatch(todoDone(props.Index))}
      >
        {todo.done === true ? <del>{todo.text}</del> : <span>{todo.text}</span>}
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
