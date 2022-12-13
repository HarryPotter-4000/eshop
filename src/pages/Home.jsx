import { Stack } from "@mui/system";
import ListItem from "../components/ListItem";
import { PRODUCTS } from "../fakedata/fakeData";

function Home() {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
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
  );
}
export default Home;
