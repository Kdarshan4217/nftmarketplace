import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  Paper,
} from '@mui/material';

const dummyNFTs = [
  { id: 1, title: 'CyberPunk Ape', image: '/assets/images/nft1.jpg', price: '1.5 ETH', description: 'Unique digital collectible ape.', creator: 'BoisSeller' },
  { id: 2, title: 'Space Warrior', image: '/assets/images/nft2.jpg', price: '2.2 ETH', description: 'Futuristic space-themed NFT.', creator: 'MetaGalaxy' },
  { id: 3, title: 'Dreamy Galaxy', image: '/assets/images/nft3.jpg', price: '0.9 ETH', description: 'Mesmerizing galaxy artwork.', creator: 'Starline' },
];

const NFTDetails = () => {
  const { id } = useParams();
  const nft = dummyNFTs.find((n) => n.id.toString() === id);

  if (!nft) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h5">NFT not found.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 6 }}>
      <Grid container spacing={4}>
        {/* Left: NFT Image */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia component="img" height="400" image={nft.image} alt={nft.title} />
          </Card>
        </Grid>

        {/* Right: Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {nft.title}
          </Typography>

          <Typography variant="body1" paragraph>
            {nft.description}
          </Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Price: {nft.price}
          </Typography>

          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Buy Now
          </Button>

          <Paper sx={{ p: 2, mt: 4 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Creator
            </Typography>
            <Typography variant="body1">{nft.creator}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NFTDetails;
