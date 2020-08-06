import React from "react";
// eslint-disable-next-line no-unused-vars
import { TodoItem, TodoItemProps, TodoItemDetail } from "../TodoItem";
// eslint-disable-next-line no-unused-vars
import { ChangeItemState } from "../TodoInputPlace";
import update from "immutability-helper";
export interface TodoListProps {
  items: TodoItemDetail[];
  changeItemMethod: ChangeItemState;
  deleteItemMethod: ChangeItemState;
}

export interface TodoListDetails {
  items: TodoItemDetail[];
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  const methods = update(props, { $unset: ["items", "children"] });
  return (
    <ul>
      {props.items.map((e) => (
        <TodoItem detail={e} {...methods} key={e.id} />
      ))}
    </ul>
  );
};
