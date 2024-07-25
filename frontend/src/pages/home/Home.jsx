import React from 'react'
import {useNavigate} from 'react-router-dom'
import "./home.css"
import Testimonials from '../../components/testimonials/Testimonials'
const Home = () => {
  const navigate=useNavigate()
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to LearnSphere</h1>
          <p>Expand Your Horizons</p>
          <button onClick={()=>navigate("/courses")} className='common-btn-home'> Get started</button>
        </div>
      </div>
      <Testimonials/>
    </div>
  )
}

export default Home
