import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';
import useStore from '../useStore.ts';
import '../style-dashboard.css';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Card, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import InventoryIcon from '@mui/icons-material/Inventory';
import NewUserTable from '../components/NewUserTable.tsx';

export default function Dashboard() {
  const { charts } = useStore();
  const { seless } = useStore();
  const data = [...charts];
  const dataset = [...seless];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

    const size = {
      width:600,
      height: 300,
    };
    const otherSetting = {
      height: 300,
      yAxis: [{ label: '' }],
      grid: { horizontal: true },
      sx: {
        [`& .${axisClasses.left} .${axisClasses.label}`]: {
          transform: 'translateX(-10px)',
        },
      },
    };
    
   
    
    const valueFormatter = (value: number | null) => `${value} orders`;
    

    return(
        <> 
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item sm={6} md={3}>
  <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0d1b26',
        color: '#ffffff',
        my:6,
        mx:1,
        borderRadius: 3,
        padding: 2,
        marginTop:0,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <InventoryIcon sx={{ fontSize: 40, color: '#00bfa5', marginRight: 2 }} />
        <Typography variant="body1" color="textSecondary">
          Total Products
        </Typography>
      </Box>
      <Box textAlign="right">
        <Typography variant="h4" fontWeight="bold" color="white">
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
          <Typography variant="body2" color="#00e676">
            25%
          </Typography>
        </Box>
      </Box>
    </Card>
  </Grid>
  <Grid item sm={6} md={3}>
  <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0d1b26',
        color: '#ffffff',
        my:6,
        mx:1,
        borderRadius: 3,
        padding: 2,
        marginTop:0,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <InventoryIcon sx={{ fontSize: 40, color: '#00bfa5', marginRight: 2 }} />
        <Typography variant="body1" color="textSecondary">
          Total Products
        </Typography>
      </Box>
      <Box textAlign="right">
        <Typography variant="h4" fontWeight="bold" color="white">
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
          <Typography variant="body2" color="#00e676">
            25%
          </Typography>
        </Box>
      </Box>
    </Card>
  </Grid>
  <Grid item sm={6} md={3}>
  <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0d1b26',
        color: '#ffffff',
        my:6,
        mx:1,
        borderRadius: 3,
        padding: 2,
        marginTop:0,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <InventoryIcon sx={{ fontSize: 40, color: '#00bfa5', marginRight: 2 }} />
        <Typography variant="body1" color="textSecondary">
          Total Products
        </Typography>
      </Box>
      <Box textAlign="right">
        <Typography variant="h4" fontWeight="bold" color="white">
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
          <Typography variant="body2" color="#00e676">
            25%
          </Typography>
        </Box>
      </Box>
    </Card>
  </Grid>
  <Grid item sm={6} md={3}>
  <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0d1b26',
        color: '#ffffff',
        my:6,
        mx:1,
        borderRadius: 3,
        padding: 2,
        marginTop:0,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <InventoryIcon sx={{ fontSize: 40, color: '#00bfa5', marginRight: 2 }} />
        <Typography variant="body1" color="textSecondary">
          Total Products
        </Typography>
      </Box>
      <Box textAlign="right">
        <Typography variant="h4" fontWeight="bold" color="white">
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
          <Typography variant="body2" color="#00e676">
            25%
          </Typography>
        </Box>
      </Box>
    </Card>
  </Grid>

</Grid>      
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
     
  <Grid item sm={12} md={6} >
  <PieChart
      className='chart-orders'
      colors={[data.color]}
      series={[
        {
          
          arcLabel: (item) => `${item.title} (${item.value}%)`,
          arcLabelMinAngle: 45,
          data,
              innerRadius: 20,
              outerRadius: 145,
              paddingAngle: 5,
              cornerRadius: 10,
              startAngle: -180,
              endAngle: 180,
              cx: 180,
              cy: 145,
         
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}

    />
  
      </Grid>
      <Grid item sm={12} md={6}>
        <BarChart
        className='chart-orders'
        dataset={dataset}
        xAxis={[
        {
          scaleType: 'band',
          dataKey: 'month',
          valueFormatter: (month, context) =>
            context.location === 'tick'
              ? `${month.slice(0, 3)} \n2023`
              : `${month} 2023`,
        },
      ]}
      series={[{ dataKey: 'orders', label: 'orders', valueFormatter }]}
      {...otherSetting}
    />
        </Grid>
      </Grid>
      <Grid sx={{ margin: '0', mt:3, mb:10}}>
        <NewUserTable />
      </Grid>
    </>
  );
}
