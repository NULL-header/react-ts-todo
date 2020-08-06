// eslint-disable-next-line no-unused-vars
import React, { FormEvent } from "react";
// eslint-disable-next-line no-unused-vars
import { TodoItemDetail } from "../TodoItem";

export type ChangeItemState = (value: TodoItemDetail) => void;
type EventFormElement = FormEvent<HTMLFormElement>;

interface TodoInputPlaceProps {
  addItemMethod: ChangeItemState;
}

export const TodoInputPlace: React.FC<TodoInputPlaceProps> = (props) => {
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
    <form id="js-form" onSubmit={handleSubmit}>
      <input
        id="js-form-input"
        className="new-todo"
        type="text"
        placeholder="What need to be done?"
        autoComplete="off"
        defaultValue=""
      />
    </form>
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
