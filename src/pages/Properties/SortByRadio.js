import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { useTranslation } from "react-i18next";
export default function RadioButtonsGroup(props) {
  const { t } = useTranslation();
  const { onSortByChange, sortByValue } = props;
  // const [value, setValue] = React.useState("female");

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">Sort By</FormLabel> */}
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={sortByValue}
        onChange={(event) => {
          onSortByChange(0, event.target.value);
        }}
      >
        <FormControlLabel
          value={t("high_to_low_price")}
          control={<Radio />}
          label={t("Price (High-Low)")}
        />
        <FormControlLabel
          value={t("low_to_high_price")}
          control={<Radio />}
          label={t("Price (Low-High)")}
        />
        <FormControlLabel
          value={t("newest")}
          control={<Radio />}
          label={t("Newest")}
        />
      </RadioGroup>
    </FormControl>
  );
}
