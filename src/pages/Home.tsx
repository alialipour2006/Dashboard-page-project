import Grid from '@mui/material/Grid';
import NewUserTable from '../components/NewUserTable.tsx';
import TotalProducts from '../components/TotalProducts.tsx';
import PieChartt from '../components/PieChartt.tsx';
import BarChartt from '../components/BarChartt.tsx';

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
          <PieChartt />
        </Grid>
        <Grid item sm={12} md={6}>
          <BarChartt />
        </Grid>
      </Grid>

      <Grid sx={{ mt: 3, mb: 10 }}>
        <NewUserTable />
      </Grid>
    </>
  );
}
