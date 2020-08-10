// eslint-disable-next-line no-unused-vars
import React from "react";
import { Divider } from "@material-ui/core";

// eslint-disable-next-line no-unused-vars
import { ChangeItemState } from "../TodoInputPlace";

// components
import { BtnGroup, DeleteBtn, TodoToggleBtn } from "./btns";
import { CheckIcon, DeleteIcon } from "./icons";
import { Title } from "./typo";

export interface TodoItemDetail {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoItemProps {
  detail: TodoItemDetail;
  changeItemMethod: ChangeItemState;
  deleteItemMethod: ChangeItemState;
  className?: string;
}

export const TodoItem: React.SFC<TodoItemProps> = (props) => {
  const values = [];
  if (props.detail.completed) values.push("done");

  const checkProp = { checked: props.detail.completed };

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    labels: string[]
  ) => {
    if (labels.includes("delete")) {
      props.deleteItemMethod(props.detail);
    } else {
      const item: TodoItemDetail = {
        ...props.detail,
        completed: !props.detail.completed,
      };
      props.changeItemMethod(item);
    }
  };
  return (
    <div className={props.className}>
      <BtnGroup onChange={handleChange} value={values}>
        <TodoToggleBtn value="done">
          <CheckIcon {...checkProp} />
          <Divider orientation="vertical" flexItem />
          <Title {...checkProp}>{props.detail.title}</Title>
        </TodoToggleBtn>
        <DeleteBtn value="delete">
          <Divider orientation="vertical" flexItem />
          <DeleteIcon />
        </DeleteBtn>
      </BtnGroup>
    </div>
  );
};
