import React from 'react'
 import ParticleAnimation from 'react-particle-animation'
import './PageStyling.css';

const Interests = () =>{
  return(
    <div className="contentContainer">
    <div className="titleContainer">
      <ParticleAnimation numParticles={40}
      color={{r: 255, g: 255, b: 255, a: 255}}
      background={{r: 51, g: 60, b: 66, a: 255}}

      lineWidth={1.1}
      particleSpeed={0.4}
          style={{
            position: 'fixed',
            width: '25%',
            height: '100%',
            opacity: '1',
          }}/>
          <div className="headingser">Interests</div>    
    </div>
    </div>
  )
}
 
export default Interests