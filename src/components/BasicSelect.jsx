import useNavigateParams from '../utils/useNavigateParams';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useEffect } from 'react';
import Spinner from './Spinner';

const BasicSelect = ({ filterName, setFilterName, filterNames }) => {
  const location = useLocation();
  const navigate = useNavigateParams();
  const [searchParams] = useSearchParams('');

  const handleChange = (event) => {
    const name = event.target.value;
    setFilterName((filterName) => name);
    navigate('/', { filter: name });
  };
  const newQueryFilterName = searchParams.get('filter');
  const FILTERS_COUNT = filterNames.length;

  useEffect(() => {
    if (newQueryFilterName) {
      setFilterName(newQueryFilterName);
    }
  }, [filterNames, location]);

  return (
    <Box
      sx={{
        width: {
          md: '300px',
          xs: '220px',
        },
      }}
    >
      {FILTERS_COUNT > 0 && (
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
      )}
    </Box>
  );
};
export default BasicSelect;
