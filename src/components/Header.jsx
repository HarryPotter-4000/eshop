import * as React from 'react';
import Logo from '../assets/image/logo.png';
import { useState } from 'react';
import {
  AppBar,
  Badge,
  Box,
  Drawer,
  Toolbar,
  Stack,
  IconButton,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/CartIcon';
import UserMenu from './UserMenu';

function Header({ orderLen }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} m="16px">
      <Link
        style={{
          textDecoration: 'none',
          color: '#fff',
          fontSize: '20px',
          fontWeight: '600',
        }}
        to="/"
      >
        Home
      </Link>
    </Box>
  );

  return (
    <Container sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        sx={{
          height: '70px',
          backgroundColor: '#ff900c',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box pt={1} sx={{ justifyContent: 'flex-start' }}>
            <Link style={{ textDecoration: 'none' }} to={'/'}>
              <img src={Logo} alt="Logo" width={100} />
            </Link>
          </Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '20px',
                  fontWeight: '600',
                  '&:hover': {
                    color: '#FF1E56',
                    transition: 'all 0.3s ease-out',
                  },
                  '&:active': { color: '#FF1E56' },
                  '&:focus': {
                    color: '#FF1E56',
                  },
                }}
                to="/"
              >
                Home
              </Link>
            </Box>
            <IconButton
              component={Link}
              style={{ textDecoration: 'none' }}
              to={'/cart'}
            >
              <Badge color="secondary" badgeContent={orderLen}>
                <CartIcon />
              </Badge>
            </IconButton>
            <UserMenu sx={{ display: { xs: 'none', sm: 'block' } }} />
            <IconButton
              color="#ff900c"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon sx={{ color: '#fff', fontSize: 30 }} />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor={'right'}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '200px',
              backgroundColor: '#ff900c',
            },
          }}
        >
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
