import React from 'react';
import './Welcome.css';
import ParticleAnimation from 'react-particle-animation';

class Welcome extends React.Component{


	render(){


	return(
		<div className="containerW">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

    <ParticleAnimation numParticles={300}
      color={{r: 0, g: 0, b: 255, a: 255}}

      lineWidth={1.1}
      particleSpeed={0.4}
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            opacity: '0.3',
          }}/>
          <br /><br /><br /><br /><br /><br />
          <div className="welcomeTextWrapper">
          <h1 className="welcomeTextHeader" >Hey there!</h1>
          <p className="welcomeText">Welcome to my website. This is my online portfolio showcasing <br />
          my career information like work experience, academics, projects, skills etc.<br />
          Navigate through the above sections to know more. Thanks :)</p>
          <p className="creator">Created & designed by Dhrumil Mehta.</p>
          </div>
          
    </div>
	);
	}
}




export default Welcome;