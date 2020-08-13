import { makeStyles } from "@material-ui/core";

interface Props {
  color: string;
}

export const useStyles = makeStyles((theme) => {
  return {
    card: {
      height: "100%",
    },
    act: {
      height: "100%",
      backgroundColor: (props: Props) => props.color,
      verticalAlign: "top",
      display: "table-cell",
      border: `solid 2px ${theme.palette.secondary.dark}`,
      boxSizing: "border-box",
      "&:hover": {
        borderWidth: 5,
      },
    },
    title: {
      verticalAlign: "top",
    },
  };
});
