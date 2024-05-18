import './App.css';
<<<<<<< HEAD
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Workouts from './Components/Workouts/Workouts';
import Home from './Components/Home/Home';
import DietPlans from './Components/DietPlans/DietPlans';
import AboutUs from './Components/AboutUs/AboutUs';
import Login from './Components/Log In/Login';
import { useState, useEffect } from "react";

function App() {
  const location = useLocation();
  const [backgroundStyle, setBackgroundStyle] = useState({});

  useEffect(() => {
    if (location.pathname === '/') {
      setBackgroundStyle({
        backgroundImage: `url("/victor-freitas-vqDAUejnwKw-unsplash.jpeg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1300px',
        height: '612px'
      });
    } else {
      setBackgroundStyle({
        backgroundColor: '#332E38',
        height: '100%'
      });
    }
  }, [location]);

  return (
    <div className="App" style={backgroundStyle}>
=======
import Navbar from './Components/Navbar'
import { Routes ,Route } from 'react-router-dom';
import Workouts from './Components/Workouts';
import Home from './Components/Home';
import DietPlans from './Components/DietPlans';
import AboutUs from './Components/AboutUs';
import Login from './Components/Log In/Login';

function App() {
  return (
    <div className="App">
>>>>>>> origin/main
      <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/workouts' element={<Workouts/>}/>
          <Route exact path='/dietplans' element={<DietPlans/>}/>
          <Route exact path='/aboutus' element={<AboutUs/>}/>
          <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
