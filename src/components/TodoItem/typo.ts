import { withStyles, Typography } from "@material-ui/core";
// eslint-disable-next-line no-unused-vars
import { ChildProps } from "./icons";

export const Title = withStyles((theme) => {
  return {
    root: {
      wordBreak: "break-word",
      marginLeft: 10,
      marginRight: 10,
      flexGrow: 1,
      textDecoration: (props: ChildProps) =>
        props.checked ? "line-through" : "none",
    },
  };
})(Typography);
