import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export default function BasicSelect({
  filterName,
  setFilterName,
  filterNames,
}) {
  const handleChange = (event) => {
    setFilterName(event.target.value);
  };

  return (
    <Box
      sx={{
        width: {
          md: '300px',
          xs: '200px',
        },
      }}
    >
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterName}
          label="Name"
          onChange={handleChange}
        >
          {filterNames &&
            filterNames.map((filterName) => (
              <MenuItem key={filterName} value={filterName}>
                {filterName}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
