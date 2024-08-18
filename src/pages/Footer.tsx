import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Container, Grid, Typography,  List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';



export default function Footer(){
    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
      ];
      const FooterWrapper = styled(Box)(({ theme }) => ({
          backgroundColor: '#1c2331',
          color: '#fff',
          padding: theme.spacing(6, 0),
          position: "absolute",
          bottom: 0,
          width: '100%'
                }));
          const latestNews = [
            { title: 'Exciting Product Launch', date: 'May 15, 2023' },
            { title: 'Company Milestone Achieved', date: 'May 10, 2023' },
            { title: 'New Partnership Announced', date: 'May 5, 2023' },
          ];
        
    return (
        <>
 
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 , position: 'fixed', bottom: 0, left: 250}}>
         
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, left: 16 }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
           </Box >
            <FooterWrapper >
    
            <Container>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h6" gutterBottom>
                    About Us
                  </Typography>
                  <Typography variant="body2">
                    We are a leading tech company dedicated to innovation and customer satisfaction.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h6" gutterBottom>
                    Latest News
                  </Typography>
                  <List>
                    {latestNews.map((news, index) => (
                      <ListItem key={index} disableGutters>
                        <ListItemText
                          primary={news.title}
                          secondary={news.date}
                          primaryTypographyProps={{ variant: 'body2' }}
                          secondaryTypographyProps={{ variant: 'caption' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h6" gutterBottom>
                    Contact Us
                  </Typography>
                  <Typography variant="body2">
                    123 Tech Street, Silicon Valley, CA 94000
                  </Typography>
                  <Typography variant="body2">
                    Email: info@techcompany.com
                  </Typography>
                  <Typography variant="body2">
                    Phone: (123) 456-7890
                  </Typography>
                </Grid>
              
              </Grid>
              <Box mt={4} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                <Typography variant="body2" sx={{ mr: 2 }}>
                  © 2023 Tech Company. All rights reserved.
                </Typography>
              </Box>
            </Container>
          </FooterWrapper>
          </>
      );

}