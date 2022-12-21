import * as React from "react";
import Logo from "../assets/image/logo.png";
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const HEADER_NAVIGATION = [
  {
    url: "/",
    caption: "Home",
  },
  {
    url: "/cart",
    caption: "Cart",
  },
  {
    url: "/order",
    caption: "Order",
  },
];

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List space={2}>
        {HEADER_NAVIGATION.map(({ url, caption }) => (
          <ListItem key={url} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
                to={url}
              >
                {caption}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Container sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          height: "70px",
          backgroundColor: "#ff900c",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box pt={1} sx={{ justifyContent: "flex-start" }}>
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <img src={Logo} alt="Logo" width={100} />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {HEADER_NAVIGATION.map(({ url, caption }) => (
              <Link
                key={url}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  paddingRight: "24px",
                  fontSize: "20px",
                  fontWeight: "600",
                  "&:hover": {
                    color: "#FF1E56",
                  },
                  "&:active": {
                    color: "#FF1E56",
                  },
                  "&:focus": {
                    color: "#FF1E56",
                  },
                }}
                to={url}
              >
                {caption}
              </Link>
            ))}
          </Box>
          <IconButton
            color="#ff900c"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#fff", fontSize: 30 }} />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Avatar
              sx={{
                backgroundColor: "inherit",
                color: "#fff",
                fontWeight: "700",
                borderStyle: "solid",
                borderColor: "#fff",
                borderWidth: "2px",
                borderRadius: "50%",
              }}
            >
              N
            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor={"right"}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "200px",
              backgroundColor: "#ff900c",
            },
          }}
        >
          <Box p={2} sx={{ display: { xs: "block", sm: "none" } }}>
            <Avatar
              sx={{
                backgroundColor: "inherit",
                color: "#fff",
                fontWeight: "700",
                borderStyle: "solid",
                borderColor: "#fff",
                borderWidth: "3px",
                borderRadius: "50%",
              }}
            >
              N
            </Avatar>
          </Box>
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Container>
  );
}

export default Header;
