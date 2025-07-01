import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>

      <Typography variant="body1" paragraph>
        Welcome to our NFT marketplace! We aim to empower artists and collectors with a secure and user-friendly platform to buy, sell, and showcase unique digital assets.
      </Typography>

      <Typography variant="body1" paragraph>
        Our mission is to bridge creativity with blockchain technology, offering seamless crypto integration, top-notch security, and a vibrant community.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Meet the Team
        </Typography>
        <Typography variant="body1">
          We are a passionate group of developers, artists, and crypto enthusiasts dedicated to building the future of digital art.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
