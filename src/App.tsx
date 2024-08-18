import './App.css'
import { Route, Routes ,BrowserRouter} from "react-router-dom"
import Header from './pages/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';


function App() {
  
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/خانه" element={<Home/>}/>
          <Route path="/داشبورد" element={<Profile/>}/>
          <Route path="/پروفایل" element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter> 
  )
}

export default App
