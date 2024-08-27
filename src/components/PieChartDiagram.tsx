import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';
import useStore from '../useStore.ts';
import { Card } from '@mui/material';

export default function PieChartDiagram() {
  const { charts } = useStore();

  const data = [...charts];

  const size = {
    width: 600,
    height: 300,
  };

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          my: 6,
          mx: 1,
          borderRadius: 3,
          padding: 1,
          marginTop: 0,
          width: '100%  ',
          color: 'textSecondary',

        }}
      >
        <PieChart
          className='chart-orders'
          series={[
            {
              arcLabel: (item) => ` (${item.value}%)`,
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
      </Card>
    </>
  );
}
