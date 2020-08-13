import React from "react";
import { Card, CardActionArea } from "@material-ui/core";
import { useStyles } from "./style";

interface ColorPaletteProps {
  className?: string;
  color: string;
  onClick: (color: string) => void;
}

export const ColorPalette: React.SFC<ColorPaletteProps> = (props) => {
  const classes = useStyles({ color: props.color });

  const handleClick = () => {
    props.onClick(props.color);
  };
  return (
    <div className={props.className}>
      <Card className={classes.card}>
        <CardActionArea onClick={handleClick} className={classes.act}>
          <p className={classes.title}>{props.color}</p>
        </CardActionArea>
      </Card>
    </div>
  );
};
