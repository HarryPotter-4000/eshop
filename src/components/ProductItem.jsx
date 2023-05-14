import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Stack,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function ProductItem(props) {
  const { id, addToOrder, ...other } = props;

  const counter = 1;
  return (
    <Card
      sx={{
        width: {
          sm: '240px',
          xs: '280px',
        },
        height: 360,
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        margin: '24px',
      }}
    >
      <CardMedia
        component="img"
        alt={other.name}
        height="140"
        image={other.image}
      />
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#1976d226',
          height: 220,
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component={Link}
            to={`/product/${id}`}
            sx={{
              textDecoration: 'none',
              color: 'text.main',
            }}
          >
            {other.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              height: '64px',
            }}
          >
            {other.description}
          </Typography>
          <Typography variant="h5" color="price.main">
            {other.price}$
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            backgroundColor: '#1976d226',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button component={Link} to={`/product/${id}`} variant="text">
            More
          </Button>
          <Button
            variant="text"
            onClick={() => {
              addToOrder({ id, counter, ...other });
            }}
          >
            BUY
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
}
