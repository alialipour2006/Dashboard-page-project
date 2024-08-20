import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { borders } from '@mui/system';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

export default function ClippedDrawer() {
    const pages = ['داشبورد', 'پروفایل', 'خانه'];

  return (
    <Box sx={{ display: 'flex' }}>
       <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
          {pages.map((page) => (      
                <Link to={`/${page}`} key={page}>
                <Typography  sx={{ margin: "0 20px", color: '#fff', display: 'inline' ,backgroundColor: "#fc8900", px:3, py:2, borderRadius: 1 }}>
                     {page}   
                </Typography>
                </Link>      
))}
          </Typography>
        </Toolbar>
      </AppBar>




      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 60, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'hidden', alignContent: "center" ,}}>
          <List>
            {['All mail', 'Trash', 'Spam','Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ overflow: 'hidden', alignContent: "center" }}>
                <ListItemButton >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
    
  );
}