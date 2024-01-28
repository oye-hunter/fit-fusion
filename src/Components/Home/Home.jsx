import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='center'>
      <p>"Fuel Your Ambition, <br />Define Your Mission <br />Choose<span>&nbsp;<i>Fit Fusion!</i>"</span></p>
      <Link to="/login" className="bn3">Join For Free</Link>
    </div>
  )
}

export default Home