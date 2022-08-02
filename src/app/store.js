import todoListSlice from "../features/todoList/todoListSlice";
import { configureStore } from "@reduxjs/toolkit";
export default configureStore({
  reducer: {
    todoListSlice: todoListSlice,
  },
});
