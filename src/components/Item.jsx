import { Card, CardMedia, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Item(props) {
  const { image, count, name, price, removeProduct } = props;

  return (
    <>
      <Card
        elevation={3}
        sx={{
          width: '320px',
          height: '80px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '10px',
          mt: '16px',
          mr: '16px',
          p: '8px',
        }}
      >
        <CardMedia
          component="img"
          alt={name}
          height="70px"
          image={image}
          sx={{ objectFit: 'contain' }}
        />

        <Typography
          gutterBottom
          variant="subtitle2"
          mb={0}
          sx={{ width: { sm: '60%', xs: '70%' } }}
        >
          {name}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.main', mr: '16px' }}>
          {count}qty
        </Typography>
        <Typography variant="h6" color="price.main">
          ${price}
        </Typography>
        <IconButton aria-label="delete" onClick={removeProduct}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </Card>
    </>
  );
}
export default Item;
