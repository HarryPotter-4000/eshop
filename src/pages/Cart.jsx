import * as React from "react";
import {
  Box,
  Container,
  Card,
  Typography,
  Divider,
  Stack,
  Button,
} from "@mui/material";

import portalgun from "../assets/image/portalgun.jpg";
import cake from "../assets/image/cake.png";
import cube from "../assets/image/cube.png";
import ShoppingItem from "../components/ShoppingItem";
import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: 1,
    name: "Portal gun",
    description: "The Aperture Science Handheld Portal Device.",
    price: 800,
    image: portalgun,
    // other fields
  },
  {
    id: 2,
    name: "Cake",
    description: "The cake is a lie",
    price: 25,
    image: cake,
    // other fields
  },
  {
    id: 3,
    name: "Cube",
    description: "The Weighted Companion Cube.",
    price: 1000,
    image: cube,
    // other fields
  },
];

function Cart() {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          width: {
            lg: "1000px",
            md: "800px",
            sm: "500px",
            xs: "300px",
          },
          display: "flex",
          flexDirection: {
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <Box
          sx={{
            p: "24px",
            backgroundColor: "#fff",
            width: {
              lg: "70%",
              md: "70%",
            },
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: "#393E46" }}>
            Shopping Cart
          </Typography>
          <Divider />
          <Box
            m={0}
            sx={{
              alignSelfh: {
                lg: "center",
                md: "center",
                xs: "flex-start",
              },
            }}
          >
            {PRODUCTS.map((product) => {
              return (
                <ShoppingItem
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  key={product.id}
                />
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            p: "24px",
            backgroundColor: "#90CAF9",
            width: {
              lg: "30%",
              md: "30%",
            },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#393E46", marginTop: "0px" }}
          >
            Summary
          </Typography>
          <Divider />
          <Stack
            mb={2}
            sx={{
              height: "100",
              py: "16px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "space-between",
            }}
          >
            <Box
              sx={{
                height: "100",
                py: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "#393E46", fontWeight: "400" }}
              >
                Products
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ color: "#393E46" }}>
                $53.98
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                height: "100",
                py: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "#393E46", fontWeight: "400" }}
              >
                Shipping
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ color: "#393E46" }}>
                Gratis
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                height: "100",
                py: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "#393E46", fontWeight: "400" }}
              >
                Total amount
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ color: "#393E46" }}>
                $53.98
              </Typography>
            </Box>
            <Button
              component={Link}
              to={"/order"}
              variant="contained"
              sx={{ width: "200px", marginTop: "24px", alignSelf: "center" }}
            >
              GO TO CHECKOUT
            </Button>
          </Stack>
        </Box>
      </Card>
    </Container>
  );
}
export default Cart;
