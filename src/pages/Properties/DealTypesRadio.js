import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Radio from "@material-ui/core/Radio";
import colors from "../../config/colors";
import { Box, Typography } from "@material-ui/core";

const CeriseRadio = withStyles({
  root: {
    color: colors.grey,
    "&$checked": {
      color: colors.cerise,
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function DealTypesRadio(props) {
  const { handleDealTypeChange, selectedValue } = props;
  const { t } = useTranslation();
  // const [selectedValue, setSelectedValue] = useState("all");

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  return (
    <div>
      <Box display="flex" style={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <CeriseRadio
            checked={selectedValue === ""}
            onChange={handleDealTypeChange}
            value=""
            name="radio-button-demo"
            inputProps={{ "aria-label": "A" }}
          />
          <Typography>{t("All")}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <CeriseRadio
            checked={selectedValue === "sale"}
            onChange={handleDealTypeChange}
            value="sale"
            name="radio-button-demo"
            inputProps={{ "aria-label": "B" }}
          />
          <Typography>{t("Sale")}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <CeriseRadio
            checked={selectedValue === "rent"}
            onChange={handleDealTypeChange}
            value="rent"
            name="radio-button-demo"
            inputProps={{ "aria-label": "C" }}
          />
          <Typography>{t("Rent")}</Typography>
        </Box>
      </Box>
    </div>
  );
}
