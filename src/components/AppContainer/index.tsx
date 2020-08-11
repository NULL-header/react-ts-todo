import React, { useState } from "react";
import update from "immutability-helper";

import { PassageTitle } from "../PassageTitle";
import { TodoContainer } from "../TodoContainer";
import { OptionContainer } from "../OptionContainer";
import { Tabs } from "../Tabs";
import { useStyles } from "./style";

const titleMap = new Map([
  ["todo", "TODO"],
  ["opt", "OPTIONS"],
]);

interface AppContainerProps {
  className?: string;
}

export const AppContainer = (props: AppContainerProps) => {
  const [containerNames, setContainerNames] = useState(["opt"]);
  const currentContainerName = containerNames[containerNames.length - 1];
  const classes = useStyles({ tab: currentContainerName });
  const title = titleMap.get(currentContainerName) || "ERROR";
  const setTab = (arg: string) => {
    const next = update(containerNames, { $push: [arg] });
    setContainerNames(next);
  };

  return (
    <div className={props.className}>
      <div className={classes.box}>
        <PassageTitle title={title} />
        <TodoContainer className={classes.Todo} />
        <OptionContainer className={classes.Opts} />
        <Tabs onClickTab={setTab} tab={currentContainerName} />
      </div>
    </div>
  );
};
