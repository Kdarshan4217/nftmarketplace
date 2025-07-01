// import React from 'react';
// import { Box, Container, Typography, Button, Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import NFTCard from '../components/NFTCard';
// import HeroSection from '../components/HeroSection';


// const dummyNFTs = [
//   {
//     id: 1,
//     title: 'CyberPunk Ape',
//     image: '/assets/images/nft1.jpg',
//     price: '1.5 ETH',
//   },
//   {
//     id: 2,
//     title: 'Space Warrior',
//     image: '/assets/images/nft2.jpg',
//     price: '2.2 ETH',
//   },
//   {
//     id: 3,
//     title: 'Dreamy Galaxy',
//     image: '/assets/images/nft3.jpg',
//     price: '0.9 ETH',
//   },
// ];

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <Box>
//       {/* Hero Section */}
       
//       {/* <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
//         <Container>
//           <Typography variant="h3" fontWeight="bold" gutterBottom>
//             Discover, Collect and Sell Extraordinary NFTs
//           </Typography>
//           <Typography variant="h6" color="textSecondary" paragraph>
//             NFT Marketplace is the world's first and largest digital marketplace for crypto collectibles and NFTs.
//           </Typography>
//           <Button variant="contained" size="large" sx={{ mr: 2 }} onClick={() => navigate('/explore')}>
//             Explore Now
//           </Button>
//           <Button variant="outlined" size="large" onClick={() => navigate('/create')}>
//             Create NFT
//           </Button>
//         </Container>
//       </Box> */}

//        <HeroSection />

//       {/* Trending NFTs */}
//       <Container sx={{ py: 6 }}>
//         <Typography variant="h4" gutterBottom>
//           🔥 Trending NFTs
//         </Typography>
//         <Grid container spacing={4}>
//           {dummyNFTs.map((nft) => (
//             <Grid item key={nft.id} xs={12} sm={6} md={4}>
//               <NFTCard nft={nft} />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Home;



import React from 'react';
import { Box, Container, Typography, Grid, Grow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NFTCard from '../components/NFTCard';
import HeroSection from '../components/HeroSection';

const dummyNFTs = [
  {
    id: 1,
    title: 'CyberPunk Ape',
    image: '/assets/images/nft1.jpg',
    price: '1.5 ETH',
  },
  {
    id: 2,
    title: 'Space Warrior',
    image: '/assets/images/nft2.jpg',
    price: '2.2 ETH',
  },
  {
    id: 3,
    title: 'Dreamy Galaxy',
    image: '/assets/images/nft3.jpg',
    price: '0.9 ETH',
  },
];

const Home = () => {
  return (
    <Box>
      <HeroSection />

      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          🔥 Trending NFTs
        </Typography>
        <Grid container spacing={4}>
          {dummyNFTs.map((nft, index) => (
            <Grid item key={nft.id} xs={12} sm={6} md={4}>
              <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {...{ timeout: 500 + index * 300 }} // stagger animation delay
              >
                <div>
                  <NFTCard nft={nft} />
                </div>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;

