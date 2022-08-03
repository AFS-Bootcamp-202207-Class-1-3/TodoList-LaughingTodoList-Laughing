import api from "./api";

export function getTodoApi() {
  return api.get("/todos");
}

export function addTodoApi(newTodo) {
  return api.post("/todos", newTodo);
}

export function deleteTodoApi(todoId) {
  return api.delete("/todos/" + todoId);
}

export function doneTodoApi(todo) {
  return api.put("/todos/" + todo.id, { done: !todo.done });
}

export function updateTodoApi(todo) {
  return api.put("/todos/" + todo.id, { done: false, text: todo.text });
}
