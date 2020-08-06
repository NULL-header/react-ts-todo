// eslint-disable-next-line no-unused-vars
import React, { CSSProperties } from "react";
// eslint-disable-next-line no-unused-vars
import { ChangeItemState } from "../TodoInputPlace";

export interface TodoItemDetail {
  id: number;
  title: string;
  completed: boolean;
}
export interface TodoItemProps {
  detail: TodoItemDetail;
  changeItemMethod: ChangeItemState;
  deleteItemMethod: ChangeItemState;
}
export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const style = getStyleLine(props.detail.completed);

  const handleChange = () => {
    const item: TodoItemDetail = {
      ...props.detail,
      completed: !props.detail.completed,
    };
    props.changeItemMethod(item);
  };

  const handleClick = () => {
    props.deleteItemMethod(props.detail);
  };

  return (
    <li>
      <input
        type="checkbox"
        className="checkbox"
        defaultChecked={props.detail.completed}
        onChange={handleChange}
      ></input>
      <span style={style}>{props.detail.title}</span>
      <button className="delete" onClick={handleClick}>
        x
      </button>
    </li>
  );
};

const getStyleLine = (isFinish: boolean): CSSProperties => ({
  textDecoration: isFinish ? "line-through" : undefined,
});
