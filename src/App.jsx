import './App.css';
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
