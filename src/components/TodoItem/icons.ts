import { withStyles } from "@material-ui/core";
import Check from "@material-ui/icons/Check";
import Delete from "@material-ui/icons/DeleteOutlined";

export interface ChildProps {
  checked: boolean;
}

export const CheckIcon = withStyles((theme) => {
  return {
    root: {
      marginRight: 5,
      marginLeft: 0,
      visibility: (props: ChildProps) => (props.checked ? "unset" : "hidden"),
    },
  };
})(Check);

export const DeleteIcon = withStyles((theme) => {
  return {
    root: {
      marginLeft: 5,
      marginRight: 0,
    },
  };
})(Delete);
