import React from "react";

import { ColorClause } from "../ColorClause";
import { ColorPalette } from "../ColorPalette";
import { useStyles } from "./style";

interface SettingFormProps {
  className?: string;
  onClick: (color: string) => void;
  settedOptionName: string;
  colors: string[];
}

export const ColorSettingForm: React.SFC<SettingFormProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={props.className}>
      <ColorClause
        firstLine={props.settedOptionName}
        className={props.className}
      >
        {props.colors.map((e, i) => (
          <ColorPalette
            color={e}
            onClick={props.onClick}
            className={classes.palette}
            key={i}
          />
        ))}
      </ColorClause>
    </div>
  );
};
