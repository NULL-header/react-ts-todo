import { withStyles, Grid } from "@material-ui/core";

export const ListContainer = withStyles((theme) => {
  return {
    root: {
      display: "flex",
      width: "100%",
      margin: 0,
    },
  };
})(Grid);

export const ItemContainer = withStyles((theme) => {
  return {
    root: {
      width: "100%",
    },
  };
})(Grid);
