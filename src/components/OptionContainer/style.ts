import { makeStyles } from "@material-ui/core";

interface Props {
  currentName: string;
}

const containersProps = (name: string) => {
  return {
    width: "100%",
    overflowY: "scroll",
    flexGrow: 1,
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    display: (props: Props) =>
      props.currentName === name ? "initial" : "none",
  } as const;
};

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
    primary: {
      ...containersProps("primary"),
    },
    secondary: {
      ...containersProps("secondary"),
    },
  };
});
