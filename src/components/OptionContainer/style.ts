import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    box: {
      backgroundColor: theme.palette.primary.light,
      height: "100%",
      display: "flex",
      padding: "0 10%",
      flexDirection: "column",
    },
    form: {
      width: "100%",
      overflowY: "scroll",
      flexGrow: 1,
      msOverflowStyle: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    tabs: {
      padding: "20% 0",
      paddingTop: "auto",
    },
  };
});
