import React from 'react';
import ParticleAnimation from 'react-particle-animation';
import './PageStyling.css';
import Timeline from './Timeline.js';

class Experience extends React.Component {

  constructor(props){
    super(props);
    this.state={
      experiences : [
        {
          id:0,
          title:'Senior Core team member',
          company:'Shutterbugs Council',
          duration:'August 2016 - May 2017'
        },
        {
          id:1,
          title:'Content Writer',
          company:'Digital Edge Pvt. Ltd.',
          duration:'June 2016 - October 2016'
        },
        {
          id:2,
          title:'Marketing Intern',
          company:'Roast Media Pvt. Ltd.',
          duration:'April 2016 - May 2016'
        }
      ]
    }
  }


  render(){
  return(
    <div>
    <div className="contentContainer">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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
          <div className="headingser">Experience</div>    
    </div>

    <div className="layoutContainer">
      <Timeline data={this.state.experiences} />
    </div>    
    </div>
   </div>
  );
}
}
 
export default Experience