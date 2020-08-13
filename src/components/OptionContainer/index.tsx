import React, { useState } from "react";
import update from "immutability-helper";
import convert from "color-convert";

import { useStyles } from "./style";
import { OptionTabs } from "../OptionTabs";
import { ColorSettingForm } from "../ColorSettingForm";

export type ThemeMethod = (color: string) => void;

interface OptionContainerProps {
  className?: string;
  primaryMethod: ThemeMethod;
  secondaryMethod: ThemeMethod;
}

export const OptionContainer: React.SFC<OptionContainerProps> = (props) => {
  const [optionNames, setOptionNames] = useState(["primary"]);
  const currentName = optionNames[optionNames.length - 1];
  const classes = useStyles({ currentName });
  const colors = getHues(30);

  const setNames = (name: string) => {
    const next = update(optionNames, { $push: [name] });
    setOptionNames(next);
  };

  return (
    <div className={props.className}>
      <div className={classes.box}>
        <ColorSettingForm
          onClick={props.primaryMethod}
          settedOptionName="primary"
          colors={colors}
          className={classes.primary}
        />
        <ColorSettingForm
          onClick={props.secondaryMethod}
          settedOptionName="secondary"
          colors={colors}
          className={classes.secondary}
        />
        <OptionTabs className={classes.tabs} onClick={setNames} />
      </div>
    </div>
  );
};

const getHues = (step: number) => {
  const loops = Math.floor(360 / step);
  return [...Array(loops).keys()].map((_, i) => {
    const hue = i * step;
    console.log(hue);
    return "#" + convert.hsv.hex([hue, 40, 80]);
  });
};
