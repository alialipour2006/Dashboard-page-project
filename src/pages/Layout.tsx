import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Box } from '@mui/material';

export default function Layout() {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.secondary.main,
      })}
    >
      <Header />
      <main
        style={{
          marginRight: 70,
          marginLeft: 10,
          marginTop: 100,
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
}
