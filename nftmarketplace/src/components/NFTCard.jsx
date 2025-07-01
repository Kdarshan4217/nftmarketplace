// import React from 'react';
// import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const NFTCard = ({ nft }) => {
//   const navigate = useNavigate();

//   return (
//     <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
//       <CardMedia
//         component="img"
//         height="200"
//         image={nft.image}
//         alt={nft.title}
//       />
//       <CardContent>
//         <Typography variant="h6" fontWeight="bold">
//           {nft.title}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Price: {nft.price}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" onClick={() => navigate(`/nft/${nft.id}`)}>
//           View Details
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default NFTCard;


// import React from 'react';
// import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

// const NFTCard = ({ nft }) => {
//   return (
//     <Card
//       sx={{
//         cursor: 'pointer',
//         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//         '&:hover': {
//           transform: 'scale(1.05)',
//           boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
//         },
//       }}
//     >
//       <CardMedia
//         component="img"
//         height="200"
//         image={nft.image}
//         alt={nft.title}
//       />
//       <CardContent>
//         <Typography variant="h6" fontWeight="bold">
//           {nft.title}
//         </Typography>
//         <Box mt={1}>
//           <Typography variant="body2" color="text.secondary">
//             Price: {nft.price}
//           </Typography>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default NFTCard;


// import React from 'react';
// import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const NFTCard = ({ nft }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     // NFT details page var redirect karaycha id pathun
//     navigate(`/nft/${nft.id}`);
//   };

//   return (
//     <Card
//       onClick={handleClick}
//       sx={{
//         cursor: 'pointer',
//         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//         '&:hover': {
//           transform: 'scale(1.05)',
//           boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
//         },
//       }}
//     >
//       <CardMedia component="img" height="200" image={nft.image} alt={nft.title} />
//       <CardContent>
//         <Typography variant="h6" fontWeight="bold">
//           {nft.title}
//         </Typography>
//         <Box mt={1}>
//           <Typography variant="body2" color="text.secondary">
//             Price: {nft.price}
//           </Typography>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default NFTCard;


// import React, { useState } from 'react';
// import { Card, CardMedia, CardContent, Typography, Box, Button, Stack } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const NFTCard = ({ nft }) => {
//   const navigate = useNavigate();
//   const [hovered, setHovered] = useState(false);

//   const handleCardClick = () => {
//     navigate(`/nft/${nft.id}`);
//   };

//   const handleAddToCart = (e) => {
//     e.stopPropagation();
//     alert(`Added "${nft.title}" to cart!`);
//   };

//   const handleBuyNow = (e) => {
//     e.stopPropagation();
//     navigate('/cart');
//   };

//   return (
//     <Card
//       onClick={handleCardClick}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       sx={{
//         cursor: 'pointer',
//         position: 'relative',
//         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//         '&:hover': {
//           transform: 'scale(1.05)',
//           boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
//         },
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//       }}
//     >
//       <CardMedia component="img" height="200" image={nft.image} alt={nft.title} />
      
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography variant="h6" fontWeight="bold" gutterBottom>
//           {nft.title}
//         </Typography>

//         <Typography variant="body1" color="text.primary" sx={{ mb: 3 }}>
//           Price: {nft.price}
//         </Typography>
//       </CardContent>

//       {/* Buttons appear on hover, fixed at bottom */}
//       {hovered && (
//         <Box sx={{ px: 2, pb: 2 }}>
//           <Stack direction="row" spacing={2} justifyContent="center">
//             <Button
//               variant="contained"
//               size="small"
//               onClick={handleAddToCart}
//               sx={{ flex: 1 }}
//             >
//               Add to Cart
//             </Button>
//             <Button
//               variant="outlined"
//               size="small"
//               onClick={handleBuyNow}
//               sx={{ flex: 1 }}
//             >
//               Buy Now
//             </Button>
//           </Stack>
//         </Box>
//       )}
//     </Card>
//   );
// };

// export default NFTCard;

import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const NFTCard = ({ nft }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  const handleCardClick = () => {
    navigate(`/nft/${nft.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(nft);
    alert(`Added "${nft.title}" to cart!`);
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    addToCart(nft);
    navigate('/cart');
  };

  return (
    <Card
      onClick={handleCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        cursor: 'pointer',
        position: 'relative',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardMedia component="img" height="200" image={nft.image} alt={nft.title} />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {nft.title}
        </Typography>

        <Typography variant="body1" color="text.primary" sx={{ mb: 3 }}>
          Price: {nft.price}
        </Typography>
      </CardContent>

      {hovered && (
        <Box sx={{ px: 2, pb: 2 }}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" size="small" onClick={handleAddToCart} sx={{ flex: 1 }}>
              Add to Cart
            </Button>
            <Button variant="outlined" size="small" onClick={handleBuyNow} sx={{ flex: 1 }}>
              Buy Now
            </Button>
          </Stack>
        </Box>
      )}
    </Card>
  );
};

export default NFTCard;







