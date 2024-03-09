import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

export const ItemsPerPageSelect = ({itemsPerPage, handleItemsPerPageChange}:any) => {
  return (
    <FormControl sx={{ m: 2, minWidth: 80 }} size="small">
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
  )
}
