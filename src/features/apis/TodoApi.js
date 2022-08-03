import api from "./api";

export function getTodo() {
  return api.get("/todos");
}

export function addTodoApi(newTodo) {
  return api.post("/todos", newTodo);
}
