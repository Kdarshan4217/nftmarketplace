// import React from 'react';
// import { Box, Typography, Container, Link, Stack, IconButton } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';

// const Footer = () => {
//   return (
//     <Box sx={{ backgroundColor: '#1976d2', color: '#fff', py: 4, mt: 5 }}>
//       <Container maxWidth="lg">
//         <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
          
//           {/* Branding */}
//           <Typography variant="h6" fontWeight="bold">
//             NFT Marketplace
//           </Typography>

//           {/* Navigation Links */}
//           <Stack direction="row" spacing={3}>
//             <Link href="/" color="inherit" underline="hover">Home</Link>
//             <Link href="/explore" color="inherit" underline="hover">Explore</Link>
//             <Link href="/about" color="inherit" underline="hover">About</Link>
//             <Link href="/contact" color="inherit" underline="hover">Contact</Link>
//           </Stack>

//           {/* Social Media Icons */}
//           <Stack direction="row" spacing={1}>
//             <IconButton href="#" color="inherit"><FacebookIcon /></IconButton>
//             <IconButton href="#" color="inherit"><TwitterIcon /></IconButton>
//             <IconButton href="#" color="inherit"><InstagramIcon /></IconButton>
//           </Stack>
//         </Stack>

//         {/* Copyright */}
//         <Typography variant="body2" align="center" sx={{ mt: 3 }}>
//           © {new Date().getFullYear()} NFT Marketplace. All rights reserved.
//         </Typography>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;


import React from 'react';
import { Box, Typography, Container, Link, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1976d2', color: '#fff', py: 4 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
          
          {/* Branding */}
          <Typography variant="h6" fontWeight="bold">
            NFT Marketplace
          </Typography>

          {/* Navigation Links */}
          <Stack direction="row" spacing={3}>
            <Link href="/" color="inherit" underline="hover">Home</Link>
            <Link href="/explore" color="inherit" underline="hover">Explore</Link>
            <Link href="/about" color="inherit" underline="hover">About</Link>
            <Link href="/contact" color="inherit" underline="hover">Contact</Link>
          </Stack>

          {/* Social Media Icons */}
          <Stack direction="row" spacing={1}>
            <IconButton href="#" color="inherit"><FacebookIcon /></IconButton>
            <IconButton href="#" color="inherit"><TwitterIcon /></IconButton>
            <IconButton href="#" color="inherit"><InstagramIcon /></IconButton>
          </Stack>
        </Stack>

        {/* Copyright */}
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          © {new Date().getFullYear()} NFT Marketplace. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

