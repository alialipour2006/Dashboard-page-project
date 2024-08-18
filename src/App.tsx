import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './pages/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';


function App() {
  
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/داشبورد" element={<Profile/>}/>
          <Route path="/پروفایل" element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter> 
  )
}

export default App
