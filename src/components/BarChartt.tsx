import { BarChart } from '@mui/x-charts/BarChart';
import useStore from '../useStore.ts';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { Card } from '@mui/material';

export default function BarChartt() {
  const { seless } = useStore();
  const dataset = [...seless];
  const valueFormatter = (value: number | null) => `${value} orders`;
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

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#ffffff',
          my: 6,
          mx: 1,
          borderRadius: 3,
          padding: 2,
          marginTop: 0,
        }}
      >
        <BarChart
          style={{ width: '100%  ', color: 'textSecondary' }}
          dataset={dataset}
          xAxis={[
            {
              scaleType: 'band',
              dataKey: 'month',
              valueFormatter: (month, context) =>
                context.location === 'tick' ? `${month} \n 1403` : `${month} 1403`,
            },
          ]}
          series={[{ dataKey: 'orders', label: 'orders', valueFormatter }]}
          {...otherSetting}
        />
      </Card>
    </>
  );
}
