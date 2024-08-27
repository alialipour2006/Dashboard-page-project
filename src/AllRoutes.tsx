import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
export default function AllRoutes() {
  return (
    <BrowserRouter>
    <div style={{ paddingBottom: '100px' }}>
        <Header />
        <div style={{ marginRight: 70, marginLeft: 10, marginTop: 100 }}>
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/داشبورد' element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
    </div>
    </BrowserRouter>

  );
}
