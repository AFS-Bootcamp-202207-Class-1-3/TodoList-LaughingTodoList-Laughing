import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, todoDone } from "./todoListSlice";
import "./style.css";
import { deleteTodoApi, doneTodoApi } from "../apis/TodoApi";
import { Button } from "antd";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
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

  const editTodo = () => {
    props.setToUpdateId(todo.id);
    props.setToUpdateText(todo.text);
    props.setVisible(true);
  };

  return (
    <div className="todo-item">
      <button
        className={todo.done === true ? "todoItem-done" : "todoItem-notdone"}
        onClick={doneTodo}
      >
        {todo.text}
      </button>
      <Button onClick={editTodo} icon={<EditOutlined />} size="small" />
      <Button
        onClick={remove}
        icon={<CloseOutlined />}
        shape="circle"
        danger
        size="small"
      />
    </div>
  );
}
