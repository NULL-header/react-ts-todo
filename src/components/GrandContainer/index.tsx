import React, { useState } from "react";
import { MuiThemeProvider, CssBaseline, Theme } from "@material-ui/core";
import update from "immutability-helper";
import { TodoContainer } from "../TodoContainer";
import { theme as defaultTheme, theme } from "../../theme";
import { OptionContainer } from "../OptionContainer";
import { Tabs } from "../Tabs";
import { useStyles } from "./style";
interface GrangComtainerProps {
  className?: string;
}

interface ComponentProps {
  className?: string;
}

type Component = React.SFC<ComponentProps>;

const ContainerMap: Map<string, Component> = new Map([
  ["todo", TodoContainer],
  ["opt", OptionContainer],
]);

interface AppState {}
type GrandHistory = [];

export const ThemeContainer: React.SFC<GrangComtainerProps> = (props) => {
  const [themes, setTheme] = useState([defaultTheme]);
  const [containerNames, setContainerNames] = useState(["todo"]);
  const currentContainerName = containerNames[containerNames.length - 1];
  const currentTheme = themes[themes.length - 1];
  const Container = ContainerMap.get(currentContainerName);
  const classes = useStyles();
  console.log(currentContainerName);

  const setTab = (arg: string) => {
    const next = update(containerNames, { $push: [arg] });
    setContainerNames(next);
  };

  if (Container == null) return <div>error</div>;

  return (
    <div className={props.className}>
      <MuiThemeProvider theme={currentTheme}>
        <div className={classes.box}>
          <CssBaseline />
          <Container className={classes.container} />
          <Tabs onClickTab={setTab} tab={currentContainerName} />
        </div>
      </MuiThemeProvider>
    </div>
  );
};
