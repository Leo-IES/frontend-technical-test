import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const ItemsPerPageSelect = ({
  itemsPerPage,
  handleItemsPerPageChange,
}: any) => {
  return (
      <FormControl className="w-5/12 sm:w-3/12 md:1/6" size="small" data-testid="itemsPerPageSelect-component">
        <InputLabel id="Items per Page">Items per Page</InputLabel>
        <Select
          labelId="Items per Page"
          value={itemsPerPage}
          label="Items per Page"
          onChange={handleItemsPerPageChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
  );
};
