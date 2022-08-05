import api from "./api";

export function getTodoApi() {
  return api.get("/Todos");
}

export function addTodoApi(newTodo) {
  return api.post("/Todos", newTodo);
}

export function deleteTodoApi(todoId) {
  return api.delete("/Todos/" + todoId);
}

export function doneTodoApi(todo) {
  return api.put("/Todos/" + todo.id, { done: !todo.done });
}

export function updateTodoApi(todo) {
  return api.put("/Todos/" + todo.id, { done: false, text: todo.text });
}
