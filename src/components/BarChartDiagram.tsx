import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { Card } from '@mui/material';
import { DatasetElementType } from '@mui/x-charts/internals';
import useStore from '../useStore.ts';
import { BarChart } from '@mui/x-charts';

export default function BarChartDiagram() {
  const orderData = useStore((state) => state.SaleData);

  const dataset = orderData as unknown as DatasetElementType<
    string | number | Date | null | undefined
  >[];

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
          padding: 1,
          marginTop: 0,
        }}
      >
        <BarChart
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
