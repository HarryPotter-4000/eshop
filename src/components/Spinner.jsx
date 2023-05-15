import { Box, Skeleton } from '@mui/material';
import LoadingImage from '../assets/image/loading.png';

const Spinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
      }}
    >
      <Skeleton
        animation="pulse"
        variant="circular"
        width={60}
        height={60}
        sx={{
          marginTop: '36px',
          backgroundImage: ` url(${LoadingImage})`,
          backgroundSize: 'contain',
        }}
      />
    </Box>
  );
};
export default Spinner;
