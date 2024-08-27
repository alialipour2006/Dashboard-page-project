import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
export default function AllRoutes() {
  const routes = [
    {
      path: '*',
      component: <Home />,
    },
    {
      path: '/داشبورد',
      component: <Dashboard />,
    },
  ];

  return (
    <BrowserRouter>
      <div style={{ paddingBottom: '100px' }}>
        <Header />
        <div style={{ marginRight: 70, marginLeft: 10, marginTop: 100 }}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path as string} element={route.component} />
            ))}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
