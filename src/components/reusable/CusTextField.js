import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CusTextField = withStyles((theme) => ({
  root: {
    "& label": {
      // fontSize: theme.typography.body2.fontSize,
      transform: "translate(12px, 23px) scale(1)",
      "&.Mui-focused": {
        color: theme.palette.grey[600],
      },
    },
    "& .MuiFilledInput-root": {
      borderRadius: 4,
      border: "1px solid",
      borderColor: theme.palette.grey[400],
      backgroundColor: "transparent",
      "&:before, &:after": {
        content: "none",
      },
      "&.Mui-focused": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
}))(TextField);

export default CusTextField;
