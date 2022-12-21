import { Container, Stack } from "@mui/system";
import ListItem from "../components/ListItem";
import { PRODUCTS } from "../fakedata/fakeData";

function Home() {
  return (
    <Container
      width="lg"
      style={{ padding: "0px" }}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          width: {
            lg: "1200px",
            md: "900px",
            sm: "600px",
            xs: "300px",
          },
          display: "flex",
          flexDirection: {
            sm: "row",
            xs: "column",
          },
          flexWrap: "wrap",
          justifyContent: {
            sm: "center",
            xs: "flex-start",
          },
          alignItems: "flex-start",
        }}
      >
        {PRODUCTS.map((product) => {
          return (
            <ListItem
              id={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              key={product.id}
            />
          );
        })}
      </Stack>
    </Container>
  );
}
export default Home;
