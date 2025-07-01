// import React, { useState } from 'react';
// import { Box, Container, Grid, Typography } from '@mui/material';
// import NFTCard from '../components/NFTCard';
// import FilterSidebar from '../components/FilterSidebar';
// import SearchBar from '../components/SearchBar';

// const allNFTs = [
//   { id: 1, title: 'CyberPunk Ape', image: '/assets/images/nft1.jpg', price: '1.5', category: 'Art' },
//   { id: 2, title: 'Space Warrior', image: '/assets/images/nft2.jpg', price: '2.2', category: 'Gaming' },
//   { id: 3, title: 'Dreamy Galaxy', image: '/assets/images/nft3.jpg', price: '0.9', category: 'Photography' },
//   { id: 4, title: 'Pixel Cat', image: '/assets/images/nft4.jpg', price: '1.0', category: 'Art' },
// ];

// const Explore = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const filteredNFTs = allNFTs.filter((nft) => {
//     const matchesSearch = nft.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'All' || nft.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <Container sx={{ py: 6 }}>
//       <Typography variant="h4" gutterBottom>
//         Explore Marketplace
//       </Typography>

//       <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

//       <Grid container spacing={4}>
//         <Grid item xs={12} md={3}>
//           <FilterSidebar selected={selectedCategory} setSelected={setSelectedCategory} />
//         </Grid>
//         <Grid item xs={12} md={9}>
//           <Grid container spacing={3}>
//             {filteredNFTs.map((nft) => (
//               <Grid item key={nft.id} xs={12} sm={6} md={4}>
//                 <NFTCard nft={nft} />
//               </Grid>
//             ))}
//             {filteredNFTs.length === 0 && (
//               <Typography sx={{ mt: 3 }} color="text.secondary">
//                 No NFTs match your search or filter.
//               </Typography>
//             )}
//           </Grid>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Explore;


import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import NFTCard from '../components/NFTCard';
import FilterSidebar from '../components/FilterSidebar';
import SearchBar from '../components/SearchBar';

const allNFTs = [
  { id: 1, title: 'CyberPunk Ape', image: '/assets/images/nft1.jpg', price: '1.5', category: 'Art' },
  { id: 2, title: 'Space Warrior', image: '/assets/images/nft2.jpg', price: '2.2', category: 'Gaming' },
  { id: 3, title: 'Dreamy Galaxy', image: '/assets/images/nft3.jpg', price: '0.9', category: 'Photography' },
  { id: 4, title: 'Pixel Cat', image: '/assets/images/nft4.jpg', price: '1.0', category: 'Art' },
];

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNFTs = allNFTs.filter((nft) => {
    const matchesSearch = nft.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || nft.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Explore Marketplace
      </Typography>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <FilterSidebar selected={selectedCategory} setSelected={setSelectedCategory} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {filteredNFTs.map((nft) => (
              <Grid item key={nft.id} xs={12} sm={6} md={4}>
                <NFTCard nft={nft} />
              </Grid>
            ))}
            {filteredNFTs.length === 0 && (
              <Typography sx={{ mt: 3 }} color="text.secondary">
                No NFTs match your search or filter.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Explore;

