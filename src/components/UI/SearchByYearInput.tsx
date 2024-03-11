import { IconButton, TextField, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  cleanFilterByYearTitles,
  filterByYearTitles,
} from "@Features/titles/titleReducer";

export const SearchByYearInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setValue(value);
  };
  const searchYear = () => {
    dispatch(filterByYearTitles(Number(value)));
  };
  const cleanYear = () => {
    dispatch(cleanFilterByYearTitles());
    setValue("");
  };
  return (
    <>
      <TextField
        label="Search By Year"
        data-testid="searchInput"
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
        <IconButton data-testid="searchbutton" size="small" onClick={searchYear}>
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Clean Search">
        <IconButton data-testid="cleanbutton" size="small" onClick={cleanYear}>
          <ClearIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};
