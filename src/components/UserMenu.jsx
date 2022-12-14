import * as React from "react";
import {
  Box,
  FormGroup,
  FormControlLabel,
  Menu,
  MenuItem,
  Switch,
  IconButton,
} from "@mui/material";
import AvatarIcon from "../assets/AvatarIcon";

function UserMenu() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        {auth && (
          <Box>
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AvatarIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem sx={{ color: "price.main" }} onClick={handleClose}>
                Profile
              </MenuItem>
              <MenuItem sx={{ color: "price.main" }} onClick={handleClose}>
                My account
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Box>
      <FormGroup>
        <FormControlLabel
          sx={{ marginRight: "0px" }}
          control={
            <Switch
              color="secondary"
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
        />
      </FormGroup>
    </>
  );
}
export default UserMenu;
