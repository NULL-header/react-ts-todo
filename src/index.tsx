import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import "./index.css";
import { App } from "./app";

export default hot(App);

ReactDOM.render(<App />, document.getElementById("root"));
