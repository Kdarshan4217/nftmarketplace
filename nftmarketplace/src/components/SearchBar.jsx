import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Box sx={{ my: 3 }}>
      <TextField
        label="Search NFTs"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
