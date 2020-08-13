import { makeStyles, createStyles } from "@material-ui/core";

interface Props {
  tab: string;
}

const containerProps = (name: string) =>
  ({
    flexGrow: 1,
    overflow: "hidden",
    display: (props: Props) => (props.tab === name ? "initial" : "none"),
  } as const);

export const useStyles = makeStyles((theme) => {
  return createStyles({
    box: {
      height: "100vh",
      display: "flex",
      flexFlow: "column",
      backgroundColor: theme.palette.primary.light,
    },
    Todo: {
      ...containerProps("todo"),
    },
    Opts: {
      ...containerProps("opt"),
    },
  });
});
