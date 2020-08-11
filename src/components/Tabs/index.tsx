import React from "react";
import { Paper } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

import { BtnGroup } from "./btns";

type OnClickTab = (arg: string) => void;

interface TabsProps {
  className?: string;
  onClickTab: OnClickTab;
  tab: string;
}

export const Tabs: React.SFC<TabsProps> = (props) => {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    label: string
  ) => {
    if (label == null) return;
    props.onClickTab(label);
  };

  return (
    <div className={props.className}>
      <Paper>
        <BtnGroup onChange={handleChange} exclusive value={props.tab}>
          <ToggleButton value="todo">a</ToggleButton>
          <ToggleButton value="opt">b</ToggleButton>
        </BtnGroup>
      </Paper>
    </div>
  );
};
