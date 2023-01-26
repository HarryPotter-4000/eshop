import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';

export default function BasicSelect({ filters, setfilter }) {
  const [chosenFilter, setChosenFilter] = useState('');

  const handleChange = (event) => {
    setChosenFilter(event.target.value);
  };
  useEffect(() => {
    !!chosenFilter && setfilter(chosenFilter);
  }, [chosenFilter]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={chosenFilter}
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
