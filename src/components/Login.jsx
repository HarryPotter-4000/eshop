import { useContext } from 'react';
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import SnackbarContent from '../utils/snackContext';

export default function SignIn() {
  const { setSnack } = useContext(SnackbarContent);
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' });

  const login = async (data) => {
    let { email, password } = data;
    email = email.trim();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSnack({
        message: `Hello, ${email}!`,
        severity: 'success',
        open: true,
        autoHideDuration: 2000,
        position: { vertical: 'top', horizontal: 'center' },
      });
      navigate(-1);
    } catch (error) {
      console.log(error.message);
      setSnack({
        message: 'Invalid email or password',
        severity: 'warning',
        open: true,
        autoHideDuration: 2000,
        position: { vertical: 'top', horizontal: 'center' },
      });
    }
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
          onSubmit={handleSubmit(login)}
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
            type="email"
            autoComplete="email"
            sx={{
              fieldset: { borderColor: 'bgBlue.main', borderWidth: '2px' },
              '& .MuiOutlinedInput-root:hover': {
                '& > fieldset': {
                  borderColor: 'primary.main',
                },
              },
            }}
            {...register('email', {
              required: 'Please, fill in the email',
              pattern: {
                value: /^(?!['`])\s*[-+.'\w]+@[-.\w]+\.[-.\w]+\s*$/gm,
                message: 'Wrong email format',
              },
              max: { value: 25, message: 'Cannot exceed 254 characters' },
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
              '& .MuiOutlinedInput-root:hover': {
                '& > fieldset': {
                  borderColor: 'primary.main',
                },
              },
            }}
            {...register('password', {
              required: 'Please, fill in the password',
              minLength: {
                value: 6,
                message: 'Your password is less than 6',
              },
              maxLength: {
                value: 25,
                message: 'Your password is too long',
              },
              pattern: {
                value: /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/,
                message: 'Only latin letters, numbers and special characters',
              },
            })}
            error={!!errors?.password}
            helperText={errors?.password && errors.password.message}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="secondary"
            sx={{ mt: 3 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
