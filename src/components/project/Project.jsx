// import React from 'react';
// import ReactCardFlip from 'react-card-flip';
import React from 'react';
import "./project.css"
import Tilt from 'react-parallax-tilt';
import Slider from '../slider/Slider';

export default function Project() {
  return (
  <div>
          <Slider></Slider>
        <Tilt glareEnable={true} glareColor={"#F3C6D1"} perspective={500}>
      <div className='parallax-tilt'>
        <p>blah100
        </p>
      </div>
    </Tilt>
  </div>);
}

