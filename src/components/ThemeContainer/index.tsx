import React, { useState } from "react";
import {
  MuiThemeProvider,
  CssBaseline,
  // eslint-disable-next-line no-unused-vars
  ThemeOptions,
  createMuiTheme,
} from "@material-ui/core";
import update from "immutability-helper";
import { AppContainer } from "../AppContainer";

interface GrangComtainerProps {
  className?: string;
}

const defualtThemeProp: ThemeOptions = {
  palette: {
    primary: {
      main: "#ffd54f",
    },
    secondary: {
      main: "#fff9b5",
    },
  },
};

interface AppState {}
type GrandHistory = [];

export const ThemeContainer: React.SFC<GrangComtainerProps> = (props) => {
  const [themeProps, setThemeProps] = useState([defualtThemeProp]);
  const currentThemeProp = themeProps[themeProps.length - 1];
  const currentTheme = createMuiTheme(currentThemeProp);

  const setTheme = (arg: ThemeOptions) => {
    const next = update(themeProps, { $push: [arg] });
    setThemeProps(next);
  };

  return (
    <div className={props.className} style={{ height: "inherit" }}>
      <MuiThemeProvider theme={currentTheme}>
        <CssBaseline />
        <AppContainer />
      </MuiThemeProvider>
    </div>
  );
};
