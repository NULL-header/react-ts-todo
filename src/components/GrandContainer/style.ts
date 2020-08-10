import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return createStyles({
    box: {
      height: "100vh",
      display: "flex",
      flexFlow: "column",
    },
    container: {
      flexGrow: 1,
    },
  });
});
