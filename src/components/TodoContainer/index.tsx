import React, { useState } from "react";

import { TodoInputPlace } from "../TodoInputPlace";
// eslint-disable-next-line no-unused-vars
import { TodoList, TodoListProps, TodoListDetails } from "../TodoList";
// eslint-disable-next-line no-unused-vars
import { TodoItemProps, TodoItemDetail } from "../TodoItem";
import { useStyles } from "./style";
// eslint-disable-next-line no-unused-vars
import update, { Spec } from "immutability-helper";

import { Container } from "@material-ui/core";

type TodoHistory = TodoListDetails[];

// to test value
// Fix to adjust this with regular making mock item
const mockValue: TodoHistory = [
  { items: [] },
  { items: [{ completed: false, id: 1001, title: "first mock item" }] },
  {
    items: [
      { completed: false, id: 1001, title: "first mock item" },
      {
        completed: false,
        id: 1002,
        title: "second mock itemaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      },
    ],
  },
];

interface TodoContainerProps {
  className?: string;
}

export const TodoContainer: React.SFC<TodoContainerProps> = (props) => {
  const [history, setHistory] = useState<TodoHistory>(mockValue);

  const currentIndex = history.length - 1;
  const current = history[currentIndex];
  const numItems = current.items.length;
  const classes = useStyles();

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
    <div className={props.className}>
      <Container className={classes.root}>
        <TodoInputPlace
          addItemMethod={addItem}
          className={classes.inputPlace}
        />
        <TodoList
          className={classes.list}
          items={current.items}
          changeItemMethod={changeItem}
          deleteItemMethod={deleteItem}
        />
        <footer>
          <span id="js-todo-count">Todoアイテム数：{numItems}</span>
        </footer>
      </Container>
    </div>
  );
};
