import { withStyles, Typography } from "@material-ui/core";

export const Headline = withStyles((theme) => {
  return {
    root: {
      color: theme.palette.text.secondary,
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  };
})(Typography);
