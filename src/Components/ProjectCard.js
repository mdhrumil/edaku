import React from 'react';
import './ProjectCard.css';

class ProjectCard extends React.Component{

    constructor(props){
    super(props);
    this.state={
      devData : [
        {
          'id':1,
          'projectTitle': 'Edaku',
          'projectDescription': 'This is the web-application you\'re interacting with! My personal website <3.',
          'tags': 'ReactJS, HTML/CSS',
          'link': "https://www.facebook.com"
        },
        {
          'id':2,
          'projectTitle': 'Project VOMUM',
          'projectDescription': 'The project is a solution to empower people to present their daily problems in front of other people, so that it gets noticed',
          'tags': 'AngularJS, Bootstrap, Mapfit API, Tableau',
          'link': 'https://github.com/husainr/vomum'
        },
        {
          'id':3,
          'projectTitle': 'Sucrox',
          'projectDescription': 'The web application asks the user to input their medical records and  uses Machine Learning to predict if the person is suffering with Diabetes.',
          'tags': 'HTML/CSS, Python, Flask',
          'link': 'https://github.com/mdhrumil/sucrox'
        }
      ],
      dsmlData : [
        {
          'id':4,
          'projectTitle': 'Project S.L.A.',
          'projectDescription': 'A mobile voice based application which uses NLP to mine the IPC sections violated and the punishments for the crimes identified in the input by the user.',
          'tags': 'Android, Python, NLTK',
          'link': "https://www.facebook.com"
        },
        {
          'id':5,
          'projectTitle': 'Scrutinizing data with Python',
          'projectDescription': 'A series of Data Science minor projects including Classification Models, Statistical studies, Web Scraping projects etc.',
          'tags': 'Python, Jupyter IDE',
          'link': 'https://github.com/husainr/vomum'
        }
      ]
    };
  }

	render(){
		return(
		<div  className="ProjectCardContainer">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

			{this.state.devData.map(function(project, index){
                    return (
                <div className="flip-card">
    						  <div className="flip-card-inner">
    							  <div className="flip-card-front">
                    	<h2 className="projectTitleStyle">{project.projectTitle}</h2> 
                    	<p className="projectTags">{project.projectDescription}</p>
    							  </div>
    							 <div className="flip-card-back">
      						    <form className="buttonText">
      							   <p className="projectTags">Tags: {project.tags}</p>
      						    </form>
    							  </div>
    						  </div>
  						  </div>
                    	);
            })} 
		</div>
		);
	}
}

export default ProjectCard