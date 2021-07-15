import React from "react";
import colors from "../../config/colors";
import { makeStyles } from "@material-ui/core/styles";
// import IconButton from "@material-ui/core/IconButton";
// import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
// import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
// import TextField from "@material-ui/core/TextField";
import { PhoneEnabledRounded } from "@material-ui/icons";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  ".MuiInputBase-input": { borderWidth: 1 },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
  },
}));

export default function InputAdornments(props) {
  const { label, onChange } = props;
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div className={classes.root}>
      <Box
        border={1}
        p={0.4}
        borderRadius={10}
        borderColor={colors.grey}
        style={{ display: "flex", width: "100%" }}
      >
        <FormControl
          size="small"
          borderRadius={20}
          className={classes.textField}
          variant="filled"
        >
          <InputLabel htmlFor="filled-adornment-password">{label}</InputLabel>

          <FilledInput
            style={{
              backgroundColor: colors.white,
            }}
            disableUnderline
            id="filled-adornment-password"
            // type={values.showPassword ? "text" : "password"}
            // value={values.password}
            onChange={(event) => {
              // console.log(event.target.value);
              onChange(event.target.value);
            }}
            endAdornment={
              <InputAdornment position="end">
                <PhoneEnabledRounded style={{ color: "#7C7C7C" }} />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </div>
  );
}
