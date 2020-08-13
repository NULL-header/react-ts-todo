import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    group: {
      backgroundColor: theme.palette.primary.dark,
    },
    icons: {
      color: theme.palette.primary.light,
    },
  };
});
