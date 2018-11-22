import React from 'react'
import ParticleAnimation from 'react-particle-animation'
import './PageStyling.css';
import SkillCard from './SkillCard.js';

class Skills extends React.Component{
  constructor(props){
    super(props);
    this.state={
      programming:{
        options: {
          chart: {
            id: "basic-bar",
            animations:{
              speed: 500
            },
            dropShadow:{
              enabled: true,
              top: 4,
              left: 4,
              blur: 4,
              opacity: 0.4
            }
          },
          xaxis: {
            type: 'category',
            categories:['Java','Python','Javascript','C'],
            labels:{
              rotateAlways: false,
              rotate: -20,
              trim: false,
              style:{
                colors: ['#333C42','#333C42','#333C42','#333C42'],
                fontSize: '20px',
                fontFamily: 'Krub'
              }
            }
          },
          dataLabels:{
            enabled: false
          },
          colors: ['#333C42','#333C42','#333C42','#333C42'],
          yaxis:{
            show: false,
            min: 0,
            max: 100
          },
          tooltip:{
            theme:'light',
            custom:function({series,seriesIndex,dataPointIndex,category}){
              return '<div style="padding:10px; font-size: 20px; font-family: \'Krub\'; color: #333C42;">'+series[seriesIndex][dataPointIndex]+'</div>'
            }
          },
          legend:{
            show: true,
            position: 'top',
            showForSingleSeries: true,
            fontSize: '15px',
            fontFamily: 'Krub',
            onItemClick:{
              toggleDataSeries: false
            }
          }
        },
        series: [
          {
          name:'Proficiency ratings on 100',
          data: [
          {
            x: 'Java',
            y: 80
          },
          {
            x: 'Python',
            y: 65
          },
          {
            x: 'Javascript',
            y: 50
          },
          {
            x: 'C',
            y: 55
          }
        ]
        }
      ]
      },
      datatech:{
        options: {
          chart: {
            id: "basic-bar",
            animations:{
              speed: 500
            },
            dropShadow:{
              enabled: true,
              top: 4,
              left: 4,
              blur: 4,
              opacity: 0.4
            }
          },
          xaxis: {
            type: 'category',
            categories:['SQL','Data Analysis','Machine Learning','Web Scraping','Data Visualization'],
            labels:{
              rotateAlways: false,
              rotate: -20,
              trim: false,
              style:{
                colors: ['#333C42','#333C42','#333C42','#333C42','#333C42'],
                fontSize: '20px',
                fontFamily: 'Krub'
              }
            }
          },
          dataLabels:{
            enabled: false
          },
          colors: ['#333C42','#333C42','#333C42','#333C42','#333C42'],
          yaxis:{
            show: false,
            min: 0,
            max: 100
          },
          tooltip:{
            theme:'light',
            custom:function({series,seriesIndex,dataPointIndex,category}){
              return '<div style="padding:10px; font-size: 20px; font-family: \'Krub\'; color: #333C42;">'+series[seriesIndex][dataPointIndex]+'</div>'
            }
          },
          legend:{
            show: true,
            position: 'top',
            showForSingleSeries: true,
            fontSize: '15px',
            fontFamily: 'Krub',
            onItemClick:{
              toggleDataSeries: false
            }
          }
        },
        series: [
          {
          name:'Proficiency ratings on 100',
          data: [
          {
            x: 'SQL',
            y: 75
          },
          {
            x: 'Data Analysis',
            y: 65
          },
          {
            x: 'Machine Learning',
            y: 55
          },
          {
            x: 'Web Scraping',
            y: 50
          },
          {
            x: 'Data Visualization',
            y: 60
          }
        ]
        }
      ]
      },
      development:{
        options: {
          chart: {
            id: "basic-bar",
            animations:{
              speed: 500
            },
            dropShadow:{
              enabled: true,
              top: 4,
              left: 4,
              blur: 4,
              opacity: 0.4
            }
          },
          xaxis: {
            type: 'category',
            categories:['HTML/CSS','ReactJS','Android Native','PHP'],
            labels:{
              rotateAlways: false,
              rotate: -20,
              trim: false,
              style:{
                colors: ['#333C42','#333C42','#333C42','#333C42'],
                fontSize: '20px',
                fontFamily: 'Krub'
              }
            }
          },
          dataLabels:{
            enabled: false
          },
          colors: ['#333C42','#333C42','#333C42','#333C42'],
          yaxis:{
            show: false,
            min: 0,
            max: 100
          },
          tooltip:{
            theme:'light',
            custom:function({series,seriesIndex,dataPointIndex,category}){
              return '<div style="padding:10px; font-size: 20px; font-family: \'Krub\'; color: #333C42;">'+series[seriesIndex][dataPointIndex]+'</div>'
            }
          },
          legend:{
            show: true,
            position: 'top',
            showForSingleSeries: true,
            fontSize: '15px',
            fontFamily: 'Krub',
            onItemClick:{
              toggleDataSeries: false
            }
          }
        },
        series: [
          {
          name:'Proficiency ratings on 100',
          data: [
          {
            x: 'HTML/CSS',
            y: 75
          },
          {
            x: 'ReactJS',
            y: 60
          },
          {
            x: 'Android Native',
            y: 70
          },
          {
            x: 'PHP',
            y: 55
          }
        ]
        }
      ]
      },
      toolstech:{
        options: {
          chart: {
            id: "basic-bar",
            animations:{
              speed: 500
            },
            dropShadow:{
              enabled: true,
              top: 4,
              left: 4,
              blur: 4,
              opacity: 0.4
            }
          },
          xaxis: {
            type: 'category',
            categories:['Jupyter IDE','Tableau','MS Excel','Adobe Photoshop'],
            labels:{
              rotateAlways: false,
              rotate: -0,
              trim: false,
              style:{
                colors: ['#333C42','#333C42','#333C42','#333C42'],
                fontSize: '20px',
                fontFamily: 'Krub'
              }
            }
          },
          dataLabels:{
            enabled: false
          },
          colors: ['#333C42','#333C42','#333C42','#333C42'],
          yaxis:{
            show: false,
            min: 0,
            max: 100
          },
          tooltip:{
            theme:'light',
            custom:function({series,seriesIndex,dataPointIndex,category}){
              return '<div style="padding:10px; font-size: 20px; font-family: \'Krub\'; color: #333C42;">'+series[seriesIndex][dataPointIndex]+'</div>'
            }
          },
          legend:{
            show: true,
            position: 'top',
            showForSingleSeries: true,
            fontSize: '15px',
            fontFamily: 'Krub',
            onItemClick:{
              toggleDataSeries: false
            }
          }
        },
        series: [
          {
          name:'Proficiency ratings on 100',
          data: [
          {
            x: 'Jupyter IDE',
            y: 75
          },
          {
            x: 'Tableau',
            y: 40
          },
          {
            x: 'Microsoft Excel',
            y: 60
          },
          {
            x: 'Adobe Photoshop',
            y: 65
          }
        ]
        }
      ]
      }
    };
  }

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
          <div className="headingser">Skills</div>    
    </div>
    <div className="skillContainer1">
      <p className="skillHeader">Programming</p>
      <SkillCard data={this.state.programming} />
    </div>
    <div className="skillContainer1">
      <p className="skillHeader">Data Technologies</p>
      <SkillCard data={this.state.datatech} />
    </div>
    <div className="skillContainer1">
      <p className="skillHeader">Software Development</p>
      <SkillCard data={this.state.development} />
    </div>
    <div className="skillContainer1">
      <p className="skillHeader">Tools</p>
      <SkillCard data={this.state.toolstech} />
    </div>
    </div>
  );
}
}
 
export default Skills