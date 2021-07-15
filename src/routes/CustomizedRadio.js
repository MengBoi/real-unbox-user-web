import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";

export default function CustomizedRadio(props) {
  const { ratioValue, onRatioChange } = props;

  return (
    <FormControl component="fieldset">
      <RadioGroup value={ratioValue} onChange={onRatioChange}>
        <FormControlLabel value="en" control={<Radio />} label="English" />
        <FormControlLabel value="ch" control={<Radio />} label="Chinese" />
        <FormControlLabel value="kh" control={<Radio />} label="Khmer" />
      </RadioGroup>
    </FormControl>
  );
}
