import { Box, Typography, Divider, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

function SummaryItems(props) {
  const { summ, total } = props;
  return (
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
          {summ}
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
          {total}
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
  );
}
export default SummaryItems;
