import React from 'react'
import ParticleAnimation from 'react-particle-animation'
import './PageStyling.css';

class Connect extends React.Component{
  render(){
  return(
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
          <div className="headingser">About</div>    
    </div>
    <div className="skillHeader">
      Personal details
      <br />
    </div>
    <div className="primaryAbout">
    <div className="socialLinks">
    Name: Dhrumil Mayur Mehta
    <br /><br />
    Birthday: 15th August, 1997
    <br /><br />
    Residence: Mumbai, India
    <br /><br />
    Resume: <a href="https://drive.google.com/file/d/1_I1K5MykWy1qzipua6JWETLxjng9i2MK/view?usp=sharing" target="_blank"> Link</a>
    <br />
    </div>
    <p className="bioPara">
    I'm a technologist who loves to play with data. I am a self taught Data Science 
    aspirant. The very practice of opening Jupyter Notebooks and starting to write Python code for playing with 
    large data sets fascinates me. I've learned Machine Learning and data analysis through various online resources 
    and blogs. I also have done some decent projects related to the field. Moreover, I'm also interested in 
    Computer Vision. Vision is probably one of the most important sense that we, as living beings have and use it 
    to differentiate and understand things in the surrounding. I am quite optimistic that such abilities can be 
    given to computers and machines of next generation to impart true intelligence. 
    Apart from that, I'm also a software developer developing mobile softwares in Android and on the web.</p>

    <div className="linksva">
    <div className="eachLink"><a href="https://www.linkedin.com/in/mdhrumil" target="_blank">LinkedIn</a></div>
    <div className="eachLink"><a href="https://www.github.com/mdhrumil" target="_blank">Github</a></div>
    <div className="eachLink"><a href="https://www.kaggle.com/mdhrumil" target="_blank">Kaggle</a></div>
    </div>
    </div>
    </div>
  )
}
}
 
export default Connect