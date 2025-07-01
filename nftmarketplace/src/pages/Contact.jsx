// import React, { useState } from 'react';
// import { Container, Typography, TextField, Button, Box } from '@mui/material';

// const Contact = () => {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // For now just alert the form content
//     alert(`Thank you, ${form.name}! Your message has been sent.`);
//     setForm({ name: '', email: '', message: '' });
//   };

//   return (
//     <Container sx={{ py: 6 }}>
//       <Typography variant="h3" gutterBottom>
//         Contact Us
//       </Typography>

//       <Box component="form" onSubmit={handleSubmit} noValidate sx={{ maxWidth: 600 }}>
//         <TextField
//           label="Name"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <TextField
//           label="Email"
//           name="email"
//           type="email"
//           value={form.email}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <TextField
//           label="Message"
//           name="message"
//           value={form.message}
//           onChange={handleChange}
//           fullWidth
//           required
//           multiline
//           rows={5}
//           margin="normal"
//         />

//         <Button type="submit" variant="contained" sx={{ mt: 3 }}>
//           Send Message
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import NotificationToast from '../components/NotificationToast';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [toast, setToast] = useState({ open: false, severity: 'success', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast({ open: true, severity: 'success', message: `Thank you, ${form.name}! Your message has been sent.` });
    setForm({ name: '', email: '', message: '' });
  };

  const handleCloseToast = () => {
    setToast((prev) => ({ ...prev, open: false }));
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ maxWidth: 600 }}>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          fullWidth
          required
          multiline
          rows={5}
          margin="normal"
        />

        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          Send Message
        </Button>
      </Box>

      <NotificationToast
        open={toast.open}
        severity={toast.severity}
        message={toast.message}
        onClose={handleCloseToast}
      />
    </Container>
  );
};

export default Contact;
