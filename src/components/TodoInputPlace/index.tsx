// eslint-disable-next-line no-unused-vars
import React, { FormEvent } from "react";
// eslint-disable-next-line no-unused-vars
import { TodoItemDetail } from "../TodoItem";
import { Input } from "./input";
import { useStyles } from "./style";

export type ChangeItemState = (value: TodoItemDetail) => void;
type EventFormElement = FormEvent<HTMLFormElement>;

interface TodoInputPlaceProps {
  addItemMethod: ChangeItemState;
  className?: string;
}

export const TodoInputPlace: React.FC<TodoInputPlaceProps> = (props) => {
  const classes = useStyles();
  const handleSubmit = (e: EventFormElement) => {
    e.preventDefault();

    const inputElement = e.currentTarget.elements[0] as HTMLInputElement;
    const title = inputElement.value;

    if (title.length < 1) return;

    const item: TodoItemDetail = {
      completed: false,
      id: incNumber(),
      title,
    };

    props.addItemMethod(item);
    inputElement.value = "";
  };
  return (
    <div className={props.className}>
      <form onSubmit={handleSubmit} autoComplete="off" className={classes.form}>
        <Input
          placeholder="What need to be done?"
          type="text"
          variant="filled"
        />
      </form>
    </div>
  );
};

const incNumberGen = (function* (initialNum = 0) {
  let num = initialNum;
  while (true) {
    const arg: number = yield num++;
    if (arg != null) num = arg;
  }
})();

function incNumber(setNum?: number) {
  const gen = setNum == null ? incNumberGen.next() : incNumberGen.next(setNum);
  return gen.value;
}
