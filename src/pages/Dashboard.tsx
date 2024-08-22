import { Grid } from '@mui/material';
import TotalProducts from '../components/TotalProducts.tsx';
import UserTable from '../components/UserTable.tsx';

export default function Dashboard() {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <TotalProducts />
          <TotalProducts />
          <TotalProducts />
          <TotalProducts />
      </Grid>
      <UserTable />
    </>
  );
}
