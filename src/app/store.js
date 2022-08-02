import todoListSlice from "../features/todoList/todoListSLice";
import { configureStore } from "@reduxjs/toolkit";
export default configureStore({
  reducer: {
    todoListSlice: todoListSlice,
  },
});
