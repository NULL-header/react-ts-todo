import React from "react";
import { Paper } from "@material-ui/core";
import { ToggleButton } from "@material-ui/lab";
import SettingsIcon from "@material-ui/icons/Settings";
import TodoIcon from "@material-ui/icons/FormatListBulletedRounded";

import { BtnGroup } from "./btns";
import { useStyles } from "./style";

type OnClickTab = (arg: string) => void;

interface TabsProps {
  className?: string;
  onClickTab: OnClickTab;
  tab: string;
}

export const Tabs: React.SFC<TabsProps> = (props) => {
  const classes = useStyles();
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    label: string
  ) => {
    if (label == null) return;
    props.onClickTab(label);
  };

  return (
    <div className={props.className}>
      <Paper className={classes.group}>
        <BtnGroup
          onChange={handleChange}
          exclusive
          value={props.tab}
          className={classes.group}
        >
          <ToggleButton value="todo">
            <TodoIcon className={classes.icons} />
          </ToggleButton>
          <ToggleButton value="opt">
            <SettingsIcon className={classes.icons} />
          </ToggleButton>
        </BtnGroup>
      </Paper>
    </div>
  );
};
