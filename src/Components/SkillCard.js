import React from 'react';
import './SkillCardStyling.css';
import Chart from "react-apexcharts";


class SkillCard extends React.Component{
	constructor(props) {
    super(props);
    this.state = {

    };
  }

	render(){
		return(
			<div className="skillCardContainer">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

			<Chart
              options={this.props.data.options}
              series={this.props.data.series}
              plotOptions={this.props.data.plotOptions}
              type="bar"
              width="600"
            />
			</div>
		);
	}
}

export default SkillCard