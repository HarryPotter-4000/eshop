import * as React from 'react';
import { ButtonGroup, Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

function ShoppingItem(props) {
  const {
    count,
    id,
    image,
    name,
    price,
    priceTotal,
    deleteProduct,
    increaseCount,
    decreaseCount,
  } = props;

  return (
    <>
      <Box
        sx={{
          height: '100',
          py: '8px',
        }}
      >
        {
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                sm: 'row',
                xs: 'column',
              },
              justifyContent: {
                sm: 'space-between',
                xs: 'flex-start',
              },
              alignItems: 'center',
            }}
          >
            <img src={image} alt={name} width={100} mr={2} />
            <Typography
              gutterBottom
              variant="h6"
              mb={0}
              mr={2}
              sx={{ width: { sm: '20%', xs: '40%' } }}
            >
              {name}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: '#393E46', width: { sm: '10%', xs: '20%' } }}
            >
              ${price}
            </Typography>
            <ButtonGroup
              width="20%"
              size="small"
              variant="text"
              aria-label="small button group"
              sx={{ color: '#90CAF9' }}
            >
              <IconButton
                onClick={() => {
                  increaseCount(id);
                }}
              >
                <AddIcon sx={{ color: '#90CAF9', size: 'small' }} />
              </IconButton>

              {<IconButton disabled>{count}</IconButton>}

              {
                <IconButton
                  disabled={count <= 1}
                  onClick={() => {
                    decreaseCount(id);
                  }}
                >
                  <RemoveIcon sx={{ color: '#90CAF9', size: 'small' }} />
                </IconButton>
              }
            </ButtonGroup>
            <Typography
              variant="h6"
              sx={{ color: '#E91E63', width: { sm: '10%', xs: '20%' } }}
            >
              ${priceTotal}
            </Typography>
            <IconButton
              width="10%"
              aria-label="delete"
              onClick={() => {
                deleteProduct(id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        }
      </Box>
    </>
  );
}
export default ShoppingItem;