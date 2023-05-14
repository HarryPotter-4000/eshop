import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  InputAdornment,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import SnackbarContext from '../utils/snackContext';

export default function OrderPage() {
  const { setSnack } = useContext(SnackbarContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    data.name = data.name.trim();
    data.phone = `+${data.phone}`;
    data.email = data.email.trim();
    console.log(JSON.stringify(data));
    reset();
    setSnack({
      message: 'Your order has been successfully made',
      severity: 'success',
      open: true,
      autoHideDuration: 2000,
      position: { vertical: 'bottom', horizontal: 'left' },
    });
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
        <Typography component="h1" variant="h4" color="text.main">
          Checkout
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{
            mt: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box mr={2}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="name"
                name="name"
                type="text"
                autoComplete="name"
                autoFocus
                sx={{
                  fieldset: {
                    borderColor: 'bgBlue.main',
                    borderWidth: '2px',
                  },
                  '& .MuiOutlinedInput-root:hover': {
                    '& > fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                }}
                {...register('name', {
                  required: 'Please, fill in the name',
                  max: { value: 25, message: 'Your name is too long' },
                  validate: (value) =>
                    !!value.trim() || 'Please, fill in the name',
                })}
                error={!!errors?.name}
                helperText={errors?.name && errors.name.message}
              />
            </Box>
            <Box>
              <TextField
                margin="normal"
                required
                fullWidth
                label="surname"
                name="surname"
                type="text"
                autoComplete="surname"
                sx={{
                  fieldset: { borderColor: 'bgBlue.main', borderWidth: '2px' },
                  '& .MuiOutlinedInput-root:hover': {
                    '& > fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                }}
                {...register('surname', {
                  required: 'Please, fill in the surname',
                  max: { value: 25, message: 'Your surname is too long' },
                  validate: (value) =>
                    !!value.trim() || 'Please, fill in the surname',
                })}
                error={!!errors?.surname}
                helperText={errors?.surname ? errors.surname.message : null}
              />
            </Box>
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            autoComplete="phone"
            type="phone"
            sx={{
              fieldset: { borderColor: 'bgBlue.main', borderWidth: '2px' },
              '& .MuiOutlinedInput-root:hover': {
                '& > fieldset': {
                  borderColor: 'primary.main',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+</InputAdornment>
              ),
            }}
            {...register('phone', {
              required: 'Please, fill in the phone',
              pattern: {
                value: /^\d{11}$/,
                message: 'Wrong phone format',
              },
            })}
            error={!!errors?.phone}
            helperText={errors?.phone ? errors.phone.message : null}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            type="email"
            name="email"
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
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="bgBlue"
            sx={{ mt: 3, color: 'text.main' }}
          >
            Confirm order
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
