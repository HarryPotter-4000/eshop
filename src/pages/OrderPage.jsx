import * as React from 'react';
import {
  Button,
  TextField,
  InputAdornment,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { useForm } from 'react-hook-form';

export default function OrderPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Checkout
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              {...register('name', {
                required: 'Please, fill in the name',
                pattern: {
                  value: /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/,
                  message: 'Only latin letters, numbers and special characters',
                },
                maxLength: {
                  value: 100,
                  message: 'Your name is too long',
                },
              })}
              error={!!errors?.name}
              helperText={errors?.name ? errors.name.message : null}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="surName"
              label="Surname"
              name="surName"
              autoComplete="name"
              autoFocus
              {...register('surName', {
                required: 'Please, fill in the surname',
                pattern: {
                  value: /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/,
                  message: 'Only latin letters, numbers and special characters',
                },
                maxLength: {
                  value: 100,
                  message: 'Your surname is too long',
                },
              })}
              error={!!errors?.surName}
              helperText={errors?.surName ? errors.surName.message : null}
            />
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            {...register('email', {
              required: 'Please, fill in the email',
              pattern: {
                value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
                message:
                  'Wrong email format (Only latin letters, numbers and special characters)',
              },
              max: { value: 254, message: 'Cannot exceed 254 characters' },
            })}
            error={!!errors?.email}
            helperText={errors?.email ? errors.email.message : null}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            autoComplete="phone"
            autoFocus
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+48</InputAdornment>
              ),
            }}
            {...register('phone', {
              required: 'Please, fill in the phone',
              pattern: {
                value: /^\d{9}$/,
                message: 'Wrong phone format',
              },
            })}
            error={!!errors?.phone}
            helperText={errors?.phone ? errors.phone.message : null}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Confirm order
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
