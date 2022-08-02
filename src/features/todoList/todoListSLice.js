import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initValue = {
  todos: [
    {
      id: uuidv4(),
      done: true,
      text: "aaaaaaaaa",
    },
  ],
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
