import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import _ from "lodash";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  inputLabel: { [theme.breakpoints.only("md")]: { fontSize: 14 } },
  option: { fontSize: 14 },
}));

const DropDown = (props) => {
  const { t } = useTranslation();
  const {
    label,
    // minWidth,
    options,
    selectedValue,
    handleChange,
  } = props;

  const classes = useStyles();
  // const [state, setState] = React.useState({
  //   name: "hai",
  // });

  return (
    <div>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        // style={{ minWidth: minWidth }}
      >
        <InputLabel
          className={classes.inputLabel}
          htmlFor="outlined-age-native-simple"
        >
          {label}
        </InputLabel>
        <Select native onChange={handleChange} label={label}>
          {_.map(options, (option) => {
            return (
              <option
                selected={selectedValue === option.value}
                className={classes.option}
                value={option.value}
              >
                {t(option.label)}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDown;
