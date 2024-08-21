import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';
import useStore from '../useStore.ts';
import '../style-dashboard.css';

export default function PieChartt(){
    const { charts } = useStore();

    const data = [...charts];

    const size = {
        width:600,
        height: 300,
      };

    return(
        <>
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

    /></>
)
}