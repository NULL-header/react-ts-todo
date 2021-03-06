import React from "react";
import { Fab, Grid } from "@material-ui/core";
import PrimaryIcon from "@material-ui/icons/WallpaperRounded";
import SecondaryIcon from "@material-ui/icons/WidgetsRounded";

import { useStyles } from "./style";
interface OptionTabsProps {
  className?: string;
  onClick: (arg: string) => void;
}

export const OptionTabs: React.SFC<OptionTabsProps> = (props) => {
  const classes = useStyles();
  const primaryButton = (
    <Fab onClick={() => props.onClick("primary")}>
      <PrimaryIcon />
    </Fab>
  );
  const secondaryButton = (
    <Fab onClick={() => props.onClick("secondary")}>
      <SecondaryIcon />
    </Fab>
  );

  return (
    <div className={props.className}>
      <Grid container spacing={10} className={classes.box}>
        {[primaryButton, secondaryButton].map((e, i) => (
          <Grid item key={i}>
            {e}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
