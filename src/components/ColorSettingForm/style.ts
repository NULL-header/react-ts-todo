import { makeStyles } from "@material-ui/core";

interface Props {
  settedName: string;
  currentName: string;
}

export const useStyles = makeStyles((theme) => {
  return {
    clause: {
      display: (props: Props) =>
        props.settedName === props.currentName ? "initial" : "none",
    },
  };
});
