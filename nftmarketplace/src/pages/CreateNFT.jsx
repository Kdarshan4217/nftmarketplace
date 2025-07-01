import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from '@mui/material';

const CreateNFT = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setForm((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just log the form data
    console.log('Form data:', form);

    // TODO: Add API call to upload NFT data
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Create / Sell NFT
      </Typography>

      <Paper sx={{ p: 4 }}>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="NFT Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />

          <TextField
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={4}
            margin="normal"
          />

          <Button
            variant="contained"
            component="label"
            sx={{ mt: 2 }}
          >
            Upload Image
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
          </Button>
          {form.image && <Typography sx={{ mt: 1 }}>{form.image.name}</Typography>}

          <TextField
            label="Price (ETH)"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            inputProps={{ min: 0, step: '0.01' }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 4 }}
            fullWidth
          >
            Create NFT
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateNFT;
