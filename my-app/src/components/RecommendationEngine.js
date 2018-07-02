import * as React from 'react';
import { DropTarget, DragDropContext, ConnectDropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const update = require('immutability-helper');


export const ItemTypes = {
  CONTAINER: 'container'
};

class Card extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div style={{backgroundColor: 'yellow', 'height':"100%", 'width':"80%", 'marginLeft': '20px'}} >
				{this.props.number}
			</div>
		);
	}
}

export class Responsive extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const data = [1, 2, 3, 4, 5]
    return (
      <div style={{'backgroundColor': 'red', 'width':'99%', height: '100%', 'margin':'0 auto'}}>
        <h2> Responsive </h2>
        <Slider {...settings}>
        	{data.map((item) => 
        		<Card number={item} />
        	)}
        </Slider>
      </div>
    );
  }
}



class RecommendationEngine extends React.Component {

	render(){
		return (
			<div style={{'backgroundColor': 'gray', 'width':'100%', height: '100%'}}>
			<Responsive />
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(RecommendationEngine);