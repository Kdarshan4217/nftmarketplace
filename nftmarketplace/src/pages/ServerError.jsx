import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServerError = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h1" color="error" gutterBottom>
        500
      </Typography>
      <Typography variant="h5" gutterBottom>
        Internal Server Error
      </Typography>
      <Typography variant="body1" gutterBottom>
        Oops! Something went wrong on our end.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" onClick={() => navigate('/')}>
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default ServerError;
