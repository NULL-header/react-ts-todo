import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { withStyles } from "@material-ui/core";

export const BtnGroup = withStyles((theme) => {
  return {
    grouped: {
      border: "none",
      margin: theme.spacing(0.5),
      "&:not(:first-child)": {
        borderRadius: theme.shape.borderRadius,
      },
      "&:first-child": {
        borderRadius: theme.shape.borderRadius,
      },
    },
  };
})(ToggleButtonGroup);

export const TodoHomeBtn = withStyles((theme) => {
  return {};
})(ToggleButton);

export const OptionBtn = withStyles((theme) => {
  return {};
})(ToggleButton);
