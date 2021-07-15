import React from "react";
import { LocationOn } from "@material-ui/icons";
import { Box } from "@material-ui/core";

const LocationOnIcon = () => {
  return (
    <Box
      display="flex"
      style={{
        width: 50,
        height: 50,
        position: "relative",
      }}
    >
      <LocationOn
        style={{
          position: "absolute",
          top: -27,
          left: -15,
          color: "red",
          fontSize: 30,
        }}
      />
    </Box>
  );
};
export default LocationOnIcon;
