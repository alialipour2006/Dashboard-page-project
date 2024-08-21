import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
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
            backgroundColor: '#1a2731',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'hidden', alignContent: 'center' }}>
          <nav aria-label='main mailbox folders'>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link to='/خانه' style={{ lineHeight: 0.5 }}>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                  </Link>
                  <ListItemText primary='Inbox' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link to='/داشبورد' style={{ lineHeight: 0.5 }}>
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
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary='Inbox' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary='Inbox' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary='Inbox' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TextsmsIcon />
                  </ListItemIcon>
                  <ListItemText primary='Inbox' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText primary='Inbox' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <UploadIcon />
                  </ListItemIcon>
                  <ListItemText primary='Inbox' />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Drawer>
    </Box>
  );
}
