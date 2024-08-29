import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TextsmsIcon from '@mui/icons-material/Textsms';
import AssignmentIcon from '@mui/icons-material/Assignment';
import UploadIcon from '@mui/icons-material/Upload';
import { Divider, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
export default function ClippedDrawer() {
  const drawerWidth = 240;

  const iconsSide = [
    {
      icon: <AccountBoxIcon />,
      color: '',
    },
    {
      icon: <ShoppingCartIcon />,
      color: '',
    },
    {
      icon: <TextsmsIcon />,
      color: '',
    },
    {
      icon: <AssignmentIcon />,
      color: '',
    },
    {
      icon: <UploadIcon />,
      color: '',
    },
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 60,
            boxSizing: 'border-box',
            color: 'textSecondary',
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            overflow: 'hidden',
            alignContent: 'center',
          }}
        >
          <nav aria-label='main mailbox folders'>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link to='/' style={{ lineHeight: 0.5 }}>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                  </Link>
                  <ListItemText primary='Inbox' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link to='/Dashboard' style={{ lineHeight: 0.5 }}>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                  </Link>
                  <ListItemText primary='Inbox' />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <Divider />
          <nav aria-label='main mailbox folders'>
            <List>
              {iconsSide.map((item, index) => (
                <ListItem disablePadding key={index}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary='Inbox' />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </Box>
      </Drawer>
    </Box>
  );
}
