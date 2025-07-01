import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #8e2de2, #4a00e0)', // Purple gradient
        color: 'white',
        textAlign: 'center',
        px: 3,
      }}
    >
      <Container maxWidth="md" data-aos="fade-up"> {/* (optional animation later) */}
        <Typography variant="h2" fontWeight={700} gutterBottom>
          Discover, Collect & Sell Extraordinary NFTs
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Join the world’s leading marketplace for crypto collectibles and non-fungible tokens.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
          onClick={() => navigate('/explore')}
        >
          Explore Now
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
