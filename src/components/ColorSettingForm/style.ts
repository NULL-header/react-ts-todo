import { makeStyles } from "@material-ui/core";

interface Props {
  settedName: string;
  currentName: string;
}

export const useStyles = makeStyles((theme) => {
  return {
    palette: {
      height: "100%",
    },
  };
});
