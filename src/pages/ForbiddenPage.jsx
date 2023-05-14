import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import redirectGIF from '../assets/image/redirect.gif';

const ForbiddenPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate(-1);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
      }}
    >
      <Box
        component="img"
        alt="redirect"
        src={redirectGIF}
        sx={{
          borderRadius: '10px',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      ></Box>
      <Stack
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: '600px', margin: '36px auto 0' }}
      >
        <Typography variant="h3" color="primary">
          Oops..
        </Typography>
        <Typography variant="h5" color="text">
          Access Denied!
        </Typography>
        <Typography variant="body1" color="text">
          You messed up the portal and you will be returned back.
        </Typography>
      </Stack>
    </Box>
  );
};
export default ForbiddenPage;
