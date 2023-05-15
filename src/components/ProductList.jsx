import { Container, Stack } from '@mui/system';
import ProductItem from './ProductItem';

function ProductList(props) {
  const { products, addToOrder } = props;

  return (
    <Container
      width="lg"
      style={{ padding: '0px' }}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Stack
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {
            sm: 'row',
            xs: 'column',
          },
          flexWrap: 'wrap',
          justifyContent: {
            lg: 'center',
            md: 'flex-start',
            xs: 'center',
          },
          alignItems: {
            sm: 'flex-start',
            xs: 'center',
          },
        }}
      >
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              addToOrder={addToOrder}
              {...product}
            />
          );
        })}
      </Stack>
    </Container>
  );
}
export default ProductList;
