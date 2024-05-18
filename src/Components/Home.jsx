import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='center'>
      <p>"Fuel Your Ambition, <br />Define Your Mission" <br />- Fit Fusion!</p>
      <Link to="/" className="bn3">Join For Free</Link>
    </div>
  )
}

export default Home