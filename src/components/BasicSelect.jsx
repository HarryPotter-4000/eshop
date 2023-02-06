import useNavigateParams from '../utils/useNavigateParams';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const BasicSelect = ({ filterName, setFilterName, filterNames }) => {
  const navigate = useNavigateParams();
  const handleChange = (event) => {
    const name = event.target.value;
    setFilterName(name);
    navigate('/', { page: name });
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
};
export default BasicSelect;
