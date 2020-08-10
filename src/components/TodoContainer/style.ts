import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexFlow: "column",
      padding: "0",
      backgroundColor: theme.palette.primary.light,
      height: "100%",
    },
    list: {
      flexGrow: 1,
      overflowY: "scroll",
      msOverflowStyle: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      padding: "1px 3vh",
    },
    inputPlace: {
      paddingTop: "10vh",
      paddingBottom: "5vh",
      paddingLeft: "5vh",
      paddingRight: "5vh",
    },
  })
);
