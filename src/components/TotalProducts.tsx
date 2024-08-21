import Grid from '@mui/material/Grid';
import { Box, Card, Typography } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


export default function TotalProducts(){
    return (
        <>
             <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item sm={6} md={3} sx={{margin: "0 auto" , width: "100%"}}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#0d1b26',
              color: '#ffffff',
              my: 6,
              mx: 1,
              borderRadius: 3,
              padding: 2,
              marginTop: 0,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <InventoryIcon sx={{ fontSize: 40, color: '#00bfa5', marginRight: 2 }} />
              <Typography variant='body1' color='textSecondary'>
                Total Products
              </Typography>
            </Box>
            <Box textAlign='right'>
              <Typography variant='h4' fontWeight='bold' color='white'>
                25,430
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#004d40',
                  borderRadius: 2,
                  padding: '2px 8px',
                  marginTop: 1,
                }}
              >
                <ArrowUpwardIcon sx={{ fontSize: 16, color: '#00e676', marginRight: 1 }} />
                <Typography variant='body2' color='#00e676'>
                  25%
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item sm={6} md={3} sx={{margin: "0 auto" , width: "100%"}}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#0d1b26',
              color: '#ffffff',
              my: 6,
              mx: 1,
              borderRadius: 3,
              padding: 2,
              marginTop: 0,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <InventoryIcon sx={{ fontSize: 40, color: '#00bfa5', marginRight: 2 }} />
              <Typography variant='body1' color='textSecondary'>
                Total Products
              </Typography>
            </Box>
            <Box textAlign='right'>
              <Typography variant='h4' fontWeight='bold' color='white'>
                25,430
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#004d40',
                  borderRadius: 2,
                  padding: '2px 8px',
                  marginTop: 1,
                }}
              >
                <ArrowUpwardIcon sx={{ fontSize: 16, color: '#00e676', marginRight: 1 }} />
                <Typography variant='body2' color='#00e676'>
                  25%
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item sm={6} md={3} sx={{margin: "0 auto" , width: "100%"}}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#0d1b26',
              color: '#ffffff',
              my: 6,
              mx: 1,
              borderRadius: 3,
              padding: 2,
              marginTop: 0,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <InventoryIcon sx={{ fontSize: 40, color: '#00bfa5', marginRight: 2 }} />
              <Typography variant='body1' color='textSecondary'>
                Total Products
              </Typography>
            </Box>
            <Box textAlign='right'>
              <Typography variant='h4' fontWeight='bold' color='white'>
                25,430
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#004d40',
                  borderRadius: 2,
                  padding: '2px 8px',
                  marginTop: 1,
                }}
              >
                <ArrowUpwardIcon sx={{ fontSize: 16, color: '#00e676', marginRight: 1 }} />
                <Typography variant='body2' color='#00e676'>
                  25%
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item sm={6} md={3} sx={{margin: "0 auto" , width: "100%"}}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#0d1b26',
              color: '#ffffff',
              my: 6,
              mx: 1,
              borderRadius: 3,
              padding: 2,
              marginTop: 0,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <InventoryIcon sx={{ fontSize: 40, color: '#00bfa5', marginRight: 2 }} />
              <Typography variant='body1' color='textSecondary'>
                Total Products
              </Typography>
            </Box>
            <Box textAlign='right'>
              <Typography variant='h4' fontWeight='bold' color='white'>
                25,430
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#004d40',
                  borderRadius: 2,
                  padding: '2px 8px',
                  marginTop: 1,
                }}
              >
                <ArrowUpwardIcon sx={{ fontSize: 16, color: '#00e676', marginRight: 1 }} />
                <Typography variant='body2' color='#00e676'>
                  25%
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
        </>
    )
}