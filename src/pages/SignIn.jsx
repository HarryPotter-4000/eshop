import * as React from 'react';
import {
  Avatar,
  Button,
  TextField,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  FormControlLabel,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from 'react-hook-form';

export default function SignIn() {
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
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
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
