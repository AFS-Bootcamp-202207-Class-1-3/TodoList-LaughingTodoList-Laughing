import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  todos: [],
};

const todoListSlice = createSlice({
  name: "todoListSlice",
  initialState: initValue,
  reducers: {
    addTodo: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },
    deleteTodo: (state, action) => {
      const newTodos = state.todos.slice();
      newTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: newTodos,
      };
    },
    todoDone: (state, action) => {
      state.todos[action.payload].done = !state.todos[action.payload].done;
    },
  },
});

export default todoListSlice.reducer;
export const { addTodo, deleteTodo, todoDone } = todoListSlice.actions;
