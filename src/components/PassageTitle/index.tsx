import React from "react";

import { Headline } from "./h";
import { useStyles } from "./style";

interface PassageTitleProps {
  className?: string;
  title: string;
}

export const PassageTitle: React.SFC<PassageTitleProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={props.className}>
      <div className={classes.box}>
        <Headline variant="h3">{props.title}</Headline>
      </div>
    </div>
  );
};
