import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

export default function Allroute() {
  return (
    <div style={{ backgroundColor: '#161d26' }}>
      <Header />
      <div style={{ marginRight: 70, marginLeft: 10, marginTop: 100 }}>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/داشبورد' element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
