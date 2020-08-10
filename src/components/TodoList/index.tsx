import React from "react";
import update from "immutability-helper";

// eslint-disable-next-line no-unused-vars
import { TodoItem, TodoItemProps, TodoItemDetail } from "../TodoItem";
// eslint-disable-next-line no-unused-vars
import { ChangeItemState } from "../TodoInputPlace";
import { ItemContainer, ListContainer } from "./containers";
export interface TodoListDetails {
  items: TodoItemDetail[];
}

export interface TodoListProps extends TodoListDetails {
  changeItemMethod: ChangeItemState;
  deleteItemMethod: ChangeItemState;
  className?: string;
}

export const TodoList: React.SFC<TodoListProps> = (props) => {
  const methods = update(props, { $unset: ["items", "children"] });

  return (
    <div className={props.className}>
      <ListContainer container justify="center" spacing={2}>
        {props.items.map((e) => (
          <ItemContainer item key={e.id}>
            <TodoItem detail={e} {...methods} />
          </ItemContainer>
        ))}
      </ListContainer>
    </div>
  );
};
