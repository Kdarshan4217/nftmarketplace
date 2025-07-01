import React, { useState } from 'react';
import { Container, Typography, Tabs, Tab, Box, Grid } from '@mui/material';
import NFTCard from '../components/NFTCard';

const dummyOwnedNFTs = [
  { id: 1, title: 'CyberPunk Ape', image: '/assets/images/nft1.jpg', price: '1.5 ETH' },
  { id: 4, title: 'Pixel Cat', image: '/assets/images/nft4.jpg', price: '1.0 ETH' },
];

const dummyCreatedNFTs = [
  { id: 2, title: 'Space Warrior', image: '/assets/images/nft2.jpg', price: '2.2 ETH' },
];

const dummyListedNFTs = [
  { id: 3, title: 'Dreamy Galaxy', image: '/assets/images/nft3.jpg', price: '0.9 ETH' },
];

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        My NFTs
      </Typography>

      <Tabs value={tabIndex} onChange={handleChange}>
        <Tab label="Owned" />
        <Tab label="Created" />
        <Tab label="Listed" />
      </Tabs>

      <TabPanel value={tabIndex} index={0}>
        <Grid container spacing={3}>
          {dummyOwnedNFTs.map((nft) => (
            <Grid item key={nft.id} xs={12} sm={6} md={4}>
              <NFTCard nft={nft} />
            </Grid>
          ))}
          {dummyOwnedNFTs.length === 0 && <Typography>No owned NFTs found.</Typography>}
        </Grid>
      </TabPanel>

      <TabPanel value={tabIndex} index={1}>
        <Grid container spacing={3}>
          {dummyCreatedNFTs.map((nft) => (
            <Grid item key={nft.id} xs={12} sm={6} md={4}>
              <NFTCard nft={nft} />
            </Grid>
          ))}
          {dummyCreatedNFTs.length === 0 && <Typography>No created NFTs found.</Typography>}
        </Grid>
      </TabPanel>

      <TabPanel value={tabIndex} index={2}>
        <Grid container spacing={3}>
          {dummyListedNFTs.map((nft) => (
            <Grid item key={nft.id} xs={12} sm={6} md={4}>
              <NFTCard nft={nft} />
            </Grid>
          ))}
          {dummyListedNFTs.length === 0 && <Typography>No listed NFTs found.</Typography>}
        </Grid>
      </TabPanel>
    </Container>
  );
};

export default Profile;
