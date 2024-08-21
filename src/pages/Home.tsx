import Grid from '@mui/material/Grid';
import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';
import useStore from '../useStore.ts';
import '../style-dashboard.css';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { BarChart } from '@mui/x-charts/BarChart';
import NewUserTable from '../components/NewUserTable.tsx';
import TotalProducts from '../components/TotalProducts.tsx';

export default function Home() {
  const { charts } = useStore();
  const { seless } = useStore();
  const data = [...charts];
  const dataset = [...seless];

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
   

        <TotalProducts/>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
     
     <Grid item sm={12} md={6} >
     <PieChart
      className='chart-orders'
      series={[
        {
          
          arcLabel: (item) => `${item.label} (${item.value}%)`,
          arcLabelMinAngle: 45,
          data,
              innerRadius: 20,
              outerRadius: 145,
              paddingAngle: 5,
              cornerRadius: 10,
              startAngle: -180,
              endAngle: 180,
              cx: 240,
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


