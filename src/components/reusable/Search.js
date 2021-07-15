import React, { useState } from "react";

import { ButtonBase, TextField, Box } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";
import colors from "../../config/colors";
const Search = (props) => {
  const { placeholder, onClick } = props;
  const [searchText, setSearchText] = useState("");
  const onChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <Box display="flex" flexDirection="row">
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        placeholder={placeholder}
        onChange={onChange}
      />
      <div style={{ width: 10 }} />
      <ButtonBase
        onClick={() => {
          onClick(searchText);
        }}
        style={{
          width: 50,
          backgroundColor: colors.primary,
          borderRadius: 5,
        }}
      >
        <SearchRounded style={{ color: colors.white }} />
      </ButtonBase>
    </Box>
  );
};
export default Search;
