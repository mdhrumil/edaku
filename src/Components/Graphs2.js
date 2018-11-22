import Graph from "react-graph-vis";
import React from "react";
import { render } from "react-dom";
import './grapher.css';
			var graph = {
  nodes: [
    { 
    	id: 1, 
    	label: "Projects",
    	title: "<div><h2 style=\"color: #000; text-align:center; font-size:25px; font-family:Charmonman\">S.V.D.D. English Medium School</h2><div style=\"margin-left: 20px; font-size: 15px; padding-bottom: 20px;\">Year of Passing: <i> 2013</i><br />Percentage:<i style=\"color:#7C0404;\"> 90.55%</i><br /></div></div>",
    	color: {
    		background: "#333C42",
    		highlight: {
        		border: '#333',
        		background: '#333',
      		},
      		hover: {
        		border: '#fff',
        		background: '#033F66'
      		}
    	},
    	font:{
    		color: '#fff',
    		size:25,
    		face: 'Krub'
    	}, 
    	heightConstraint:{
    		minimum: 50
    	},
    	widthConstraint:{
    		minimum: 150
    	},
    	shadow:{
    		enabled: true
    	},
      shape:'box'
    },


    { 
    	id: 2, 
    	label: "Machine Learning",
    	title: "<div><h2 style=\"color: #000; text-align:center; font-size:25px; font-family:Charmonman\">K.J. Somaiya Junior College of Science & Commerce</h2><div style=\"margin-left: 20px; font-size: 15px;\">Year of Passing: <i> 2015</i><br />Percentage:<i style=\"color:#7C0404;\"> 84.48%</i><br />Relevant Courses:<ul><li>Physics</li><li>Chemistry</li><li>Mathematics</li><li>Introduction to Computer Science</li></ul></div></div>",
    	color: {
    		background: "#333C42",
    		highlight: {
        		border: '#333',
        		background: '#333'
      		},
      		hover: {
        		border: '#fff',
        		background: '#033F66'
      		}
    	},
    	font:{
    		color: '#fff',
    		size: 25,
    		face: 'Krub'
    	},
    	heightConstraint:{
    		minimum: 50
    	},
    	widthConstraint:{
    		minimum: 170
    	},
    	shadow:{
    		enabled: true
    	},
      shape: 'box'
    },


    { 
    	id: 3, 
    	label: "Development",
    	title: "<div><h2 style=\"color: #000; text-align:center; font-size:25px; font-family:Charmonman\">K.J. Somaiya College of Engineering</h2><div style=\"margin-left: 20px; font-size: 15px; padding-bottom:20px;\">Year of Passing: <i> 2019</i><br />Percentage:<i style=\"color:#7C0404;\"> 70.71%</i><br />Relevant Courses:<ul><li>Data Structures & Algorithms</li><li>Web Development and Frameworks</li><li>Database Systems and Warehousing</li><li>Computer Networks</li><li>Artificial Intelligence</li><li>Data Mining and Big Data Analytics</li></ul></div></div>",
    	color: {
    		background: "#333C42",
    		highlight: {
        		border: '#333',
        		background: '#333'
      		},
      		hover: {
        		border: '#fff',
        		background: '#033F66'
      		}
    	},
    	font:{
    		color: '#fff',
    		size: 25,
    		face: 'Krub'
    	},
    	heightConstraint:{
    		minimum: 50
    	},
    	widthConstraint:{
    		minimum: 150
    	},
    	shadow:{
    		enabled: true
    	},
      shape: 'box'
    }

  ],
  edges: [{ from: 1, to: 2 }, { from: 1, to: 3 }]
};


var options = {
	clickToUse: true,
  layout: {
    hierarchical: false
  },
  edges: {
    color: {
    	color: '#333C42'
    },
    length: 350,
    width: 3,
    shadow: {
  	enabled: true
  },
  arrows:{
  	to:{
  		enabled: false
  	}
  }
  },
  interaction:{
  	hideNodesOnDrag : false,
  	hideEdgesOnDrag: true,
  	hover: true,
  	tooltipDelay: 300,
  }
};

var events = {
  selectNode: function(sample) {
  	alert('POPUP Caused by '+ sample.nodes);  
  }
};



class Graphs2 extends React.Component{


	constructor(props){
		super(props);

	this.state = {
    isShowingModal: false,
    graph: graph,
    options: options,
    events: events
		}
	}

	render(){
	return(
  		<div>
    	<Graph graph={this.state.graph} options={this.state.options} style={{ height: "560px" }} />

  </div>
);
}
}

export default Graphs2