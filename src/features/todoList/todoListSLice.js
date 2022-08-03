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
      const index = newTodos.findIndex((todo) => todo.id === action.payload);
      newTodos.splice(index, 1);
      return {
        ...state,
        todos: newTodos,
      };
    },
    todoDone: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].done = !state.todos[index].done;
    },
    addTodos: (state, action) => {
      state.todos = action.payload;
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index] = action.payload;
    },
  },
});

export default todoListSlice.reducer;
export const { addTodo, deleteTodo, todoDone, addTodos, updateTodo } =
  todoListSlice.actions;
