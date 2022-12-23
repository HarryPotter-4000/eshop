import * as React from 'react';
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from 'react-hook-form';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    data.email = data.email.trim();
    console.log(JSON.stringify(data, null));
    reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4" color="text.main">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{
            mt: 1,
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            sx={{
              fieldset: { borderColor: 'bgBlue.main', borderWidth: '2px' },
            }}
            {...register('email', {
              required: 'Please, fill in the email',
              pattern: {
                value: /^(?!['`])\s*[-+.'\w]+@[-.\w]+\.[-.\w]+\s*$/gm,
                message: 'Wrong email format',
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
            name="password"
            label="password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{
              fieldset: { borderColor: 'bgBlue.main', borderWidth: '2px' },
            }}
            {...register('password', {
              required: 'Please, fill in the password',
              minLength: {
                value: 6,
                message: 'Your password is less than 6',
              },
              maxLength: {
                value: 100,
                message: 'Your password is too long',
              },
              pattern: {
                value: /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/,
                message: 'Only latin letters, numbers and special characters',
              },
            })}
            error={!!errors?.password}
            helperText={errors?.password ? errors.password.message : null}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="bgBlue"
            sx={{ mt: 3, color: 'text.main' }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
