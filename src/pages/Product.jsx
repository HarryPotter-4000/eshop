import { PRODUCTS } from "../fakedata/fakeData";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button, ButtonGroup, Box, Container, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Product() {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const [counter, setCounter] = useState(0);

  const found = PRODUCTS.find((obj) => {
    return obj.id === productId;
  });

  return (
    <>
      {found && (
        <Container
          sx={{
            width: {
              lg: "1000px",
              md: "800px",
              xs: "300px",
            },
            display: "flex",
            flexDirection: {
              lg: "row",
              md: "row",
              xs: "column",
            },
            justifyContent: {
              lg: "center",
              md: "center",
              xs: "flex-stsrt",
            },
            alignItems: "flex-start",
            padding: "0px",
          }}
        >
          <Box
            mr={8}
            sx={{
              alignSelfh: {
                lg: "center",
                md: "center",
                xs: "flex-start",
              },
            }}
          >
            <img src={found.image} alt={found.name} width="300" />
          </Box>
          <Box
            sx={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h2" my={2} color="text.main">
              {found.name}
            </Typography>
            <Typography variant="subtitle1" mb={2} color="text.main">
              {found.description}
            </Typography>
            <Typography variant="h3" mb={4} color="price.main">
              {found.price}$
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <ButtonGroup
                size="medium"
                variant="contained"
                color="bgBlue"
                aria-label="outlined button group"
              >
                <Button
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                >
                  <AddIcon color="textLight" />
                </Button>

                {<Button disabled>{counter}</Button>}

                {
                  <Button
                    disabled={counter <= 0}
                    onClick={() => {
                      setCounter(counter - 1);
                    }}
                  >
                    <RemoveIcon color="textLight" />
                  </Button>
                }
              </ButtonGroup>
              <Button variant="contained">
                <AddShoppingCartIcon sx={{ color: "white" }} />
              </Button>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
}
export default Product;

// sx={{
//   maxWidth: 800,
//   height: 800,
//   "&:hover": {
//     opacity: [0.9, 0.8, 0.7],
//   },
//{xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920}
// }}
