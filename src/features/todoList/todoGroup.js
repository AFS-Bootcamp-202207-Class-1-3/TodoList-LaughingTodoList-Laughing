import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoGroup() {
  const List = useSelector((state) => state.todoListSlice.todos);

  const TodoList = List.map((element, index) => {
    return <TodoItem key={element.id} id={element.id}></TodoItem>;
  });

  return <div>{TodoList}</div>;
}
