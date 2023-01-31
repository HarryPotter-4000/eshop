import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function FiltersTag({ filters }) {
  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={filters}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField {...params} label="filters" placeholder="Favorites" />
      )}
      sx={{ width: '500px' }}
    />
  );
}
