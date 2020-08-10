import { withStyles, TextField } from "@material-ui/core";

export const Input = withStyles((theme) => {
  return {
    root: {
      width: "100%",
    },
  };
})(TextField);
