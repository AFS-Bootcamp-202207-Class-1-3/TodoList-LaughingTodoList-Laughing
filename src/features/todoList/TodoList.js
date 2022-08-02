import TodoGenerator from "./todoGenerator";
import TodoGroup from "./todoGroup";
export default function TodoList() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>TODO List</h1>
      <TodoGenerator />
      <TodoGroup />
    </div>
  );
}
