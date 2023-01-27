import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export default function BasicSelect({ filter, filters, setFilter }) {
  const handleChange = (event) => {
    setFilter(event.target.value);
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
          value={filter}
          label="Name"
          onChange={handleChange}
        >
          {filters &&
            filters.map((filter) => (
              <MenuItem key={filter} value={filter}>
                {filter}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
