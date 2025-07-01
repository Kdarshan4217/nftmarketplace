import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

const Login = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    } catch (error) {
      console.error('Wallet connection failed:', error);
    }
  };

  return (
    <Container sx={{ py: 6, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Connect Your Wallet
      </Typography>

      {account ? (
        <>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Connected as: {account}
          </Typography>
          <Button variant="contained" color="secondary" onClick={() => setAccount(null)}>
            Disconnect
          </Button>
        </>
      ) : (
        <Button variant="contained" color="primary" onClick={connectWallet}>
          Connect Wallet
        </Button>
      )}
    </Container>
  );
};

export default Login;
