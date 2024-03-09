import { IconButton, TextField, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

export const SearchByYearInput = ({ search, cleanSearch }: any) => {
  const [value, setValue] = useState("");

  const handleInputChange = ({ target }: any) => {
    const { value } = target;
    setValue(value);
  };
  const searchYear = () => {
    search(value);
  };
  const cleanYear = () => {
    cleanSearch();
    setValue("");
  };
  return (
    <>
      <TextField
        label="Search By Year"
        type="number"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleInputChange(event);
        }}
        InputProps={{ inputProps: { min: 2010, max: 2024 } }}
        InputLabelProps={{
          shrink: true,
        }}
        size="small"
        className="w-1/2 sm:w-1/4 md:1/8 mr-4"
      />
      <Tooltip title="Search">
      <IconButton size="small" onClick={searchYear}>
        <SearchIcon />
      </IconButton>
      </Tooltip>
      <Tooltip title="Clean Search">
        <IconButton size="small" onClick={cleanYear}>
          <ClearIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};
