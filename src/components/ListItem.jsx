import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function ListItem(props) {
  const { id, image, name, description, price } = props;
  return (
    <Card
      sx={{
        width: 240,
        height: 360,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        margin: "16px",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1976d226",
          height: 220,
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {price}$
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            backgroundColor: "#1976d226",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link to={`/product/${id}`}>
            <Button size="small">Learn More</Button>
          </Link>
          <Button size="small">BUY</Button>
        </CardActions>
      </Stack>
    </Card>
  );
}
