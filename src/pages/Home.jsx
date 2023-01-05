import { Container, Stack } from '@mui/system';
import ProductList from '../components/ProductList';

function Home(props) {
  const { products, addToOrder } = props;

  return (
    <Container width="lg" style={{ padding: '0px' }}>
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
          alignItems: 'space-around',
          margin: '0 auto',
        }}
      >
        <ProductList products={products} addToOrder={addToOrder} />
      </Stack>
    </Container>
  );
}
export default Home;
