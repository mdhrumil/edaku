import React from 'react';
import './Layout.css';
class Layout extends React.Component{
	render(){
		return(
			<div className="components">
				<div className="dataParts">
				<h3>Title</h3>
				<p className="org">Company</p>
				<p>Duratinon</p>
				</div>				
			</div>
		);
	}
}

export default Layout