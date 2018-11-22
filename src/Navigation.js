import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Navigation.css';
import {NavLink} from 'react-router-dom';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Connect from './Components/Connect';
import Projects from './Components/Projects';
import './Welcome.css';
import Welcome from './Welcome.js';

class Navigation extends React.Component{


	render(){


		return(


		<div className="mainBar">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

			<link href="https://fonts.googleapis.com/css?family=Anton|Cinzel:900|Krub:700|Niramit:700|Orbitron:700|Pacifico|Righteous|Roboto+Slab:700|Russo+One|Luckiest+Guy|Srisakdi:700|Ubuntu:700|Charmonman:700" rel="stylesheet" />
				<div className="container">
      <div className="name_header">
      <h1 className="title">Dhrumil Mayur Mehta</h1>
      </div>
      <div className="topnav">
      <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/experience" activeStyle={{ color: "blue" , fontSize:"22px"}}>Experience</NavLink></li>
          <li><NavLink to="/education" activeStyle={{ color: "blue" , fontSize:"22px"}}>Education</NavLink></li>
          <li><NavLink to="/skills" activeStyle={{ color: "blue" , fontSize:"22px"}}>Skills</NavLink></li>
          <li><NavLink to="/projects" activeStyle={{ color: "blue" , fontSize:"22px"}}>Projects</NavLink></li>
          <li><NavLink to="/connect" activeStyle={{ color: "blue" , fontSize:"22px"}}>About</NavLink></li>  
        </ul>     
      </div>
      </div>
      <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/education" component={Education}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/connect" component={Connect}/>
        </Switch>
			</div>
		);
	}
}


export default Navigation;

