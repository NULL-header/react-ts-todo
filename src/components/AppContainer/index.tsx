import React, { useState } from "react";
import update from "immutability-helper";

import { PassageTitle } from "../PassageTitle";
import { TodoContainer } from "../TodoContainer";
import { OptionContainer, ThemeMethod } from "../OptionContainer";
import { Tabs } from "../Tabs";
import { useStyles } from "./style";
const titleMap = new Map([
  ["todo", "TODO"],
  ["opt", "OPTIONS"],
]);

interface AppContainerProps {
  className?: string;
  primaryMethod: ThemeMethod;
  secondaryMethod: ThemeMethod;
}

export const AppContainer = (props: AppContainerProps) => {
  const [containerNames, setContainerNames] = useState(["todo"]);
  const currentContainerName = containerNames[containerNames.length - 1];
  const classes = useStyles({ tab: currentContainerName });
  const title = titleMap.get(currentContainerName) || "ERROR";
  const methods = update(props, { $unset: ["className"] });

  const setTab = (arg: string) => {
    const next = update(containerNames, { $push: [arg] });
    setContainerNames(next);
  };

  return (
    <div className={props.className}>
      <div className={classes.box}>
        <PassageTitle title={title} />
        <TodoContainer className={classes.Todo} />
        <OptionContainer className={classes.Opts} {...methods} />
        <Tabs onClickTab={setTab} tab={currentContainerName} />
      </div>
    </div>
  );
};
