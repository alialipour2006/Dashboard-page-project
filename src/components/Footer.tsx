import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
const withLink = (to:string, children:any) => <Link href={to} target="_blank" sx={{mt: 1}}>{children}</Link>;
const actions = [
  { icon: withLink("", <InstagramIcon />), name: 'Instagram'  },
  { icon: withLink("", <TelegramIcon />), name: 'Telegram' },
  { icon: withLink("", <YouTubeIcon />), name: 'YouTube' },
  { icon: withLink("https://github.com/alialipour2006/Dashboard-page-project", <GitHubIcon />), name: 'GitHub' },
];

export default function Footer() {


  return (
    <Box
      sx={{
        height: 320,
        transform: 'translateZ(0px)',
        flexGrow: 1,
        position: 'fixed',
        bottom: 0,
        left: 70,
      }}
    >      
      <SpeedDial ariaLabel='SpeedDial basic example' icon={<SpeedDialIcon  sx={{backgroundColor: "#004d3f" , color: "#fff"}}/>} sx={{color: "#fff",}} FabProps={{  style: { backgroundColor: "#004d3f" } }}>
        {actions.map((action) => (
                      <SpeedDialAction  key={action.name} icon={action.icon} tooltipTitle={action.name} sx={{backgroundColor: "#004d3f" }} />
        ))}
      </SpeedDial>
    </Box>
  );
}
