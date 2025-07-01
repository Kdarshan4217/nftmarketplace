// import React, { useState } from 'react';
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Button,
//   Box,
//   Divider,
// } from '@mui/material';

// const dummyCartItems = [
//   { id: 1, title: 'CyberPunk Ape', image: '/assets/images/nft1.jpg', price: 1.5 },
//   { id: 3, title: 'Dreamy Galaxy', image: '/assets/images/nft3.jpg', price: 0.9 },
// ];

// const Cart = () => {
//   const [cartItems, setCartItems] = useState(dummyCartItems);

//   const handleRemove = (id) => {
//     setCartItems((items) => items.filter((item) => item.id !== id));
//   };

//   const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

//   const handleCheckout = () => {
//     // TODO: Integrate wallet connect & payment flow here
//     alert('Proceeding to crypto checkout...');
//   };

//   return (
//     <Container sx={{ py: 6 }}>
//       <Typography variant="h4" gutterBottom>
//         Your Cart
//       </Typography>

//       {cartItems.length === 0 ? (
//         <Typography>Your cart is empty.</Typography>
//       ) : (
//         <>
//           <Grid container spacing={3}>
//             {cartItems.map((item) => (
//               <Grid item key={item.id} xs={12} sm={6} md={4}>
//                 <Card>
//                   <CardMedia component="img" height="200" image={item.image} alt={item.title} />
//                   <CardContent>
//                     <Typography variant="h6">{item.title}</Typography>
//                     <Typography>Price: {item.price} ETH</Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button color="error" onClick={() => handleRemove(item.id)}>
//                       Remove
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>

//           <Box sx={{ mt: 4, textAlign: 'right' }}>
//             <Divider sx={{ mb: 2 }} />
//             <Typography variant="h6">Total: {totalPrice.toFixed(2)} ETH</Typography>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ mt: 2 }}
//               onClick={handleCheckout}
//             >
//               Checkout
//             </Button>
//           </Box>
//         </>
//       )}
//     </Container>
//   );
// };

// export default Cart;



import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  Divider,
} from '@mui/material';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert('Proceeding to crypto checkout...');
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {cartItems.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia component="img" height="200" image={item.image} alt={item.title} />
                  <CardContent>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography>Price: {item.price} ETH</Typography>
                    <Typography>Quantity: {item.quantity}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="error" onClick={() => removeFromCart(item.id)}>
                      Remove One
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 4, textAlign: 'right' }}>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="h6">Total: {totalPrice.toFixed(2)} ETH</Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleCheckout}>
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Cart;


