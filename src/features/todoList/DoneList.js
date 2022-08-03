import { useSelector } from "react-redux";
export default function DoneList() {
  const List = useSelector((state) => {
    const todos = state.todoListSlice.todos;
    return todos.filter((value) => value.done);
  });

  const TodoList = List.map((element, index) => {
    return (
      <input
        key={element.id}
        style={{ display: "block" }}
        value={element.text}
        disabled
      ></input>
    );
  });

  return <div>{TodoList}</div>;
}
