import React from 'react';
import { Paper, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const FilterSidebar = ({ selected, setSelected }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Category
      </Typography>
      <RadioGroup value={selected} onChange={(e) => setSelected(e.target.value)}>
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel value="Art" control={<Radio />} label="Art" />
        <FormControlLabel value="Gaming" control={<Radio />} label="Gaming" />
        <FormControlLabel value="Photography" control={<Radio />} label="Photography" />
      </RadioGroup>
    </Paper>
  );
};

export default FilterSidebar;
