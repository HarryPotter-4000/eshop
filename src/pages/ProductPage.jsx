import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button, ButtonGroup, Box, Container, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ProductPage(props) {
  const { products, addtoOrder } = props;
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const [counter, setCounter] = useState(1);

  const found = products.find((obj) => {
    return obj.id === productId;
  });

  return (
    <>
      {found && (
        <Container
          sx={{
            width: {
              md: '800px',
              sm: '500px',
              xs: '300px',
            },
            display: 'flex',
            flexDirection: {
              md: 'row',
              xs: 'column',
            },
            justifyContent: 'center',

            alignItems: 'flex-start',
            padding: '0px',
          }}
        >
          <Box mr={8}>
            <img src={found.image} alt={found.name} width="300" />
          </Box>
          <Box
            mb={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h2" my={2} color="text.main">
              {found.name}
            </Typography>
            <Typography variant="subtitle1" mb={2} color="text.main">
              {found.description}
            </Typography>
            <Box
              mb={4}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h4" color="price.main">
                {found.price}$
              </Typography>
              <ButtonGroup
                size="small"
                variant="text"
                aria-label="small button group"
                sx={{ color: '#90CAF9' }}
              >
                <Button
                  onClick={() => {
                    setCounter((counter) => counter + 1);
                  }}
                >
                  <AddIcon sx={{ color: '#90CAF9', size: 'small' }} />
                </Button>

                {
                  <Button disabled size="large">
                    {counter}
                  </Button>
                }

                {
                  <Button
                    disabled={counter <= 1}
                    onClick={() => {
                      setCounter((counter) => counter - 1);
                    }}
                  >
                    <RemoveIcon sx={{ color: '#90CAF9', size: 'small' }} />
                  </Button>
                }
              </ButtonGroup>
              <Button
                variant="contained"
                onClick={() => {
                  console.log(counter);
                  addtoOrder({
                    id: found.id,
                    name: found.name,
                    price: found.price,
                    image: found.image,
                    counter,
                  });
                }}
              >
                BUY
              </Button>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
}
export default ProductPage;
