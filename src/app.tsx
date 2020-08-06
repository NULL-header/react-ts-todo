import React from "react";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { TodoContainer } from "./components/TodoContainer";
import { theme } from "./theme";

export const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <TodoContainer />
  </MuiThemeProvider>
);
