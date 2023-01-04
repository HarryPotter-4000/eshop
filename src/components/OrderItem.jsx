import * as React from 'react';
import { ButtonGroup, Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

function OrderItem(props) {
  const {
    count,
    image,
    name,
    price,
    removeFromOrder,
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: {
                  sm: '56%',
                  xs: '80%',
                },
                marginRight: {
                  md: '24px',
                },
              }}
            >
              <img src={image} alt={name} width={70} />
              <Typography
                gutterBottom
                variant="h6"
                mb={0}
                ml={2}
                mr={1}
                sx={{ width: { sm: '60%', xs: '70%' } }}
              >
                {name}
              </Typography>
              <Typography variant="h6" sx={{ color: '#393E46' }}>
                ${price}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: {
                  sm: '41%',
                  xs: '80%',
                },
              }}
            >
              <ButtonGroup
                size="small"
                variant="text"
                aria-label="small button group"
                sx={{ color: '#90CAF9' }}
              >
                <IconButton sx={{ p: 0 }} onClick={increaseCount}>
                  <AddIcon sx={{ color: '#90CAF9', size: 'small' }} />
                </IconButton>

                {
                  <IconButton sx={{ p: 0 }} disabled>
                    {count}
                  </IconButton>
                }

                {
                  <IconButton
                    sx={{ p: 0 }}
                    disabled={count <= 1}
                    onClick={decreaseCount}
                  >
                    <RemoveIcon sx={{ color: '#90CAF9', size: 'small' }} />
                  </IconButton>
                }
              </ButtonGroup>
              <Typography variant="h6" sx={{ color: '#E91E63' }}>
                ${price * count}
              </Typography>
              <IconButton aria-label="delete" onClick={removeFromOrder}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        }
      </Box>
    </>
  );
}
export default OrderItem;
