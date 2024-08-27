import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <main style={{ marginRight: 70, marginLeft: 10, marginTop: 100 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
