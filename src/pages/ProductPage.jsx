import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, ButtonGroup, Box, Container, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { getOne } from '../utils/api';

function ProductPage(props) {
  const { addtoOrder } = props;
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    async function getAllProducts() {
      const foundProduct = await getOne('products', id);
      setProduct(foundProduct);
    }
    getAllProducts();
  }, []);

  return (
    <>
      {product && (
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
            <img src={product.image} alt={product.name} width="300" />
          </Box>
          <Box
            mb={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h2" my={2} color="text.main">
              {product.name}
            </Typography>
            <Typography variant="subtitle1" mb={2} color="text.main">
              {product.description}
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
                {product.price}$
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
                  addtoOrder({
                    id: id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
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
