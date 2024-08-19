import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Container,  Typography } from '@mui/material';
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
      
              <Typography variant="h3">Footer</Typography>
           
            </Container>
          </FooterWrapper>
          </>
      );

}