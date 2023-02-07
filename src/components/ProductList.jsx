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
          width: {
            lg: '1200px',
            md: '900px',
            sm: '600px',
            xs: '300px',
          },
          display: 'flex',
          flexDirection: {
            sm: 'row',
            xs: 'column',
          },
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
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
