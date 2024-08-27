import Grid from '@mui/material/Grid';
import NewUserTable from '../components/NewUserTable.tsx';
import TotalProducts from '../components/TotalProducts.tsx';
import PieChartDiagram from '../components/PieChartDiagram.tsx';
import BarChartDiagram from '../components/BarChartDiagram.tsx';

export default function Home() {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <TotalProducts />
        <TotalProducts />
        <TotalProducts />
        <TotalProducts />
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item sm={12} md={6}>
          <PieChartDiagram />
        </Grid>
        <Grid item sm={12} md={6}>
          <BarChartDiagram />
        </Grid>
      </Grid>

      <Grid sx={{ mt: 3 }}>
        <NewUserTable />
      </Grid>
    </>
  );
}
