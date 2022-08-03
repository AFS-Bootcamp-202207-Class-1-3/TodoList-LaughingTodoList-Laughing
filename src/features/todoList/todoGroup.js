import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { List, Modal, Input, notification } from "antd";
import "./style.css";
import { useState } from "react";
import { updateTodoApi } from "../apis/TodoApi";
import { updateTodo } from "./todoListSlice";

export default function TodoGroup() {
  const todoList = useSelector((state) => state.todoListSlice.todos);
  const [visible, setVisible] = useState(false);
  const [toUpdateId, setToUpdateId] = useState("");
  const [toUpdateText, setToUpdateText] = useState("");
  const dispatch = useDispatch();

  const cleanModal = () => {
    setVisible(false);
    setToUpdateId("");
    setToUpdateText("");
  };

  const toUpdateTodo = () => {
    if (toUpdateId.length === 0 || toUpdateText.length === 0)
      return notification.warning({
        message: `输入不能为空`,
      });

    updateTodoApi({ id: toUpdateId, text: toUpdateText }).then((res) => {
      dispatch(updateTodo(res.data));
      cleanModal();
    });
  };

  return (
    <div>
      <List
        header={<h3>{todoList.length} Todos</h3>}
        dataSource={todoList}
        split={false}
        renderItem={(todo) => (
          <List.Item>
            <TodoItem
              key={todo.id}
              id={todo.id}
              setToUpdateId={setToUpdateId}
              setVisible={setVisible}
              setToUpdateText={setToUpdateText}
            ></TodoItem>
          </List.Item>
        )}
        pagination={{
          pageSize: 7,
        }}
      />
      <Modal
        visible={visible}
        onCancel={cleanModal}
        onOk={toUpdateTodo}
        closable={false}
      >
        <div>
          <Input
            value={toUpdateText}
            onChange={(event) => {
              setToUpdateText(event.target.value);
            }}
          ></Input>
        </div>
      </Modal>
    </div>
  );
}
