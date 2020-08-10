// eslint-disable-next-line no-unused-vars
import { withStyles, Theme, createStyles } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

const eaveLength = "5px";
const brightness = (num: number) => `brightness(${num})`;

export const BtnGroup = withStyles((theme) => ({
  root: {
    width: "100%",
    padding: `calc(0% + ${eaveLength}) 0%`,
  },
  groupedHorizontal: {
    "&:not(:first-child)": {
      borderLeft: ["solid", "3px", theme.palette.secondary.dark].join(" "),
    },
  },
}))(ToggleButtonGroup);

const buttonColorProps = (mainColor: string) => ({
  backgroundColor: mainColor,
  "&:hover": {
    backgroundColor: mainColor,
    filter: brightness(0.9),
  },
  "&$selected": {
    backgroundColor: mainColor,
    filter: brightness(0.7),
  },
  "&$selected:hover": {
    backgroundColor: mainColor,
    filter: brightness(0.55),
  },
  "&$selected+.MuiToggleButton-root.Mui-selected": {},
});

// button
const ButtonProps = (theme: Theme) => {
  return {
    selected: {},
  };
};

export const DeleteBtn = withStyles((theme) => {
  const props = ButtonProps(theme);
  const mainColor = theme.palette.secondary.dark;
  return {
    ...props,
    root: {
      ...buttonColorProps(mainColor),
      border: ["solid", "3px", mainColor].join(" "),
      margin: `calc(0% - ${eaveLength}) 0%`,
      backgroundColor: mainColor,
    },
  };
})(ToggleButton);

export const TodoToggleBtn = withStyles((theme) => {
  const props = ButtonProps(theme);
  const mainColor = theme.palette.secondary.main;
  return {
    ...props,
    root: {
      ...buttonColorProps(mainColor),
      flexGrow: 1,
      display: "flex",
    },
  };
})(ToggleButton);
