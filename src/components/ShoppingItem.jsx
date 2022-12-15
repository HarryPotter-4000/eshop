import * as React from "react";
import { useState } from "react";
import {
  ButtonGroup,
  Box,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

function ShoppingItem(props) {
  const { id, image, name, price } = props;
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Box
        sx={{
          height: "100",
          py: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              lg: "row",
              md: "row",
              sm: "row",
              xs: "column",
            },
            justifyContent: {
              lg: "space-between",
              md: "space-between",
              sm: "space-between",
              xs: "flex-start",
            },
            alignItems: "center",
          }}
        >
          <img src={image} alt={name} width={100} mr={2} />
          <Typography gutterBottom variant="h6" mb={0} mr={2}>
            {name}
          </Typography>
          <Typography variant="h6" sx={{ color: "#393E46" }}>
            ${price}
          </Typography>
          <ButtonGroup
            size="small"
            variant="text"
            aria-label="small button group"
            sx={{ color: "#90CAF9" }}
          >
            <IconButton
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              <AddIcon sx={{ color: "#90CAF9", size: "small" }} />
            </IconButton>

            {<IconButton disabled>{counter}</IconButton>}

            {
              <IconButton
                disabled={counter <= 0}
                onClick={() => {
                  setCounter(counter - 1);
                }}
              >
                <RemoveIcon sx={{ color: "#90CAF9", size: "small" }} />
              </IconButton>
            }
          </ButtonGroup>
          <Typography variant="h6" sx={{ color: "#E91E63" }}>
            ${price * counter}
          </Typography>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />
    </>
  );
}
export default ShoppingItem;
