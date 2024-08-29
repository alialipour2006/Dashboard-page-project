import { AppBar, Switch, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useStore from '../useStore.ts';

export default function NavBar() {
  const btnsNav = ['news', 'Pricing', 'Blog'];
  const settings = ['Profile', 'Account', 'Logout'];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { darkMode, toggleMode } = useStore();
  const handleThemeChange = () => {
    toggleMode(!darkMode);
  };
  return (
    <>
      <AppBar position='fixed' sx={{ zIndex: 999999, backgroundColor: '#004d3f' }}>
        <Box>
          <Container maxWidth={false}>
            <Toolbar disableGutters>
              <Switch
                sx={{ zIndex: 9999999, position: 'fixed', right: '80px', top: '15px' }}
                checked={darkMode}
                onChange={handleThemeChange}
              />
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' } }} />

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size='large'
                  aria-label='pages'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon />
                </IconButton>

                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {btnsNav.map((btn) => (
                    <MenuItem key={btn} onClick={handleCloseNavMenu}>
                      <Typography textAlign='center'>{btn}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {btnsNav.map((btn) => (
                  <Button
                    key={btn}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'inherit', display: 'block' }}
                  >
                    {btn}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircleIcon fontSize='large' />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign='center'>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </Box>
      </AppBar>
    </>
  );
}
