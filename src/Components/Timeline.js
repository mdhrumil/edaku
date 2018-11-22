import React from 'react';
import './Timeline.css';

class Timeline extends React.Component{
  render(){
    return(
<div class="timelineva">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

<p className="yearDisplay">2018 (Present)</p>
  <section id="cd-timeline" class="cd-container">


    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-picture">
      </div>

      <div class="cd-timeline-content">
        <h2><u>{this.props.data[0].company}</u></h2>
        <div class="timeline-content-info">
          <span class="timeline-content-info-title">
            <i class="fa fa-certificate" aria-hidden="true"></i>
            {this.props.data[0].title}
          </span>
          <br />          
        </div>
        <span className="dates">
            {this.props.data[0].duration}
          </span>
        <p>Senior core team member of official photography council of college. Previously a co-ordinator.</p>
        <ul class="content-skills">
        <li>Planning photography during college events.</li>
        <li>Delegation of work to Junior co-ordinators.</li>
        <li>Covering events in college including TEDx.</li>

        </ul>
      </div>
    </div>

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-movie">
      </div>

     <div class="cd-timeline-content">
        <h2><u>{this.props.data[1].company}</u></h2>
        <div class="timeline-content-info">
          <span class="timeline-content-info-title">
            <i class="fa fa-certificate" aria-hidden="true"></i>
            {this.props.data[1].title}
          </span>
          <br />          
        </div>
        <span className="dates">
            {this.props.data[1].duration}
          </span>
        <p>Writing web articles based on variety of topics such as Travel, Food, Internet products, Applications etc. Worked remotely.</p>
      </div>
    </div>

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-picture">
      </div>

      <div class="cd-timeline-content">
        <h2><u>{this.props.data[2].company}</u></h2>
        <div class="timeline-content-info">
          <span class="timeline-content-info-title">
            <i class="fa fa-certificate" aria-hidden="true"></i>
            {this.props.data[2].title}
          </span>
          <br />          
        </div>
        <span className="dates">
            {this.props.data[2].duration}
          </span>
        <p>Responsible to bring downloads to their Android application using suitable marketing strategies. Worked remotely.</p>
      </div>
    </div>


    </section>
<p className="yearDisplay">2015</p>

</div>
    );
  }
}

export default Timeline