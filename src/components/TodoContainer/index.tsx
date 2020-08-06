import React, { useState } from "react";

import { TodoInputPlace } from "../TodoInputPlace";
// eslint-disable-next-line no-unused-vars
import { TodoList, TodoListProps, TodoListDetails } from "../TodoList";
// eslint-disable-next-line no-unused-vars
import { TodoItemProps, TodoItemDetail } from "../TodoItem";
// eslint-disable-next-line no-unused-vars
import update, { Spec } from "immutability-helper";

import { Container, Typography } from "@material-ui/core";

type History = TodoListDetails[];

export const TodoContainer = () => {
  const [history, setHistory] = useState<History>([{ items: [] }]);

  const currentIndex = history.length - 1;
  const current = history[currentIndex];
  const numItems = current.items.length;

  const updateHistory = ($spec: Spec<TodoListDetails, never>) => {
    const nextCurrent = update(current, $spec);
    const newHistory = update(history, { $push: [nextCurrent] });
    setHistory(newHistory);
  };

  const addItem = (item: TodoItemDetail) => {
    updateHistory({ items: { $push: [item] } });
  };

  const changeItem = (item: TodoItemDetail) => {
    const targetIndex = current.items.findIndex((e) => e.id === item.id);
    updateHistory({ items: { [targetIndex]: { $set: item } } });
  };

  const deleteItem = (item: TodoItemDetail) => {
    const targetIndex = current.items.findIndex((e) => e.id === item.id);
    updateHistory({ items: { $splice: [[targetIndex, 1]] } });
  };

  console.log(history);

  return (
    <Container maxWidth="xs">
      <div className="todoapp">
        <TodoInputPlace addItemMethod={addItem} />
        <div id="js-todo-items" className="todo-list">
          <TodoList
            items={current.items}
            changeItemMethod={changeItem}
            deleteItemMethod={deleteItem}
          />
        </div>
        <footer className="footer">
          <span id="js-todo-count">Todoアイテム数：{numItems}</span>
        </footer>
      </div>
    </Container>
  );
};
