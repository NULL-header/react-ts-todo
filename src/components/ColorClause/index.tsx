import React from "react";
import { Typography, Card, GridList, GridListTile } from "@material-ui/core";
interface ClauseProps {
  className?: string;
  firstLine: string;
  children: React.ReactNode[];
}

export const ColorClause: React.SFC<ClauseProps> = (props) => {
  const childrenNodes =
    React.Children.map(props.children, (child, i) => {
      return (
        <GridListTile key={i} cols={2 / 3} rows={1 / 2}>
          <Card style={{ height: "100%" }}>{child}</Card>
        </GridListTile>
      );
    }) || [];
  return (
    <div className={props.className}>
      <div>
        <Typography variant="h4">{props.firstLine}</Typography>
        <GridList spacing={25}>{childrenNodes}</GridList>
      </div>
    </div>
  );
};
