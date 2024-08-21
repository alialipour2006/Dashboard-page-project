import { BarChart } from '@mui/x-charts/BarChart';
import useStore from '../useStore.ts';
import '../style-dashboard.css';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

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
      <BarChart
        className='chart-orders'
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
    </>
  );
}
