import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./app/store";
import reportWebVitals from "./reportWebVitals";
import TodoList from "./features/todoList/TodoList";
import { Provider } from "react-redux";
import Layout from "./features/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./features/pages/About";
import DoneList from "./features/todoList/DoneList";
import NotFound from "./features/pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout></Layout>}>
          <Route path={"/"} element={<TodoList></TodoList>}></Route>
          <Route path={"/About"} element={<About></About>}></Route>
          <Route path={"/DoneList"} element={<DoneList />}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
reportWebVitals();
