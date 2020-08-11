import React, { useState } from "react";
import PrimaryIcon from "@material-ui/icons/WallpaperRounded";
import SecondaryIcon from "@material-ui/icons/WidgetsRounded";

import { useStyles } from "./style";
import { ColorClause } from "../ColorClause";
import { OptionTabs } from "../OptionTabs";

interface OptionContainerProps {
  className?: string;
}

export const OptionContainer: React.SFC<OptionContainerProps> = (props) => {
  const [optionNames, setOptionNames] = useState(["primary"]);
  const classes = useStyles();

  return (
    <div className={props.className}>
      <div className={classes.box}>
        <ColorClause firstLine="test" className={classes.form}>
          {[...Array(10).keys()].map((e, i) => (
            <div key={i}>{i}</div>
          ))}
        </ColorClause>
        <OptionTabs className={classes.tabs} />
      </div>
    </div>
  );
};
