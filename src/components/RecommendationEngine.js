import * as React from 'react';
import { DropTarget, DragDropContext, ConnectDropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const update = require('immutability-helper');
var randomColor = require('randomcolor'); 


export const ItemTypes = {
  CONTAINER: 'container'
};

class Card extends React.Component{
	constructor(props){
		super(props);
		this.state = {color:randomColor()}
		console.log(this.state.color);
	}

	render(){
		return (
		<div style={{backgroundColor: this.state.color, 'height':"55vh", 'width':"80%", 'marginLeft': '20px', 'marginTop': '20px'}} >
	      <Grid container spacing={24}>
	        <Grid item xs={12} sm={12}>
	          <Paper  > {this.props.number}</Paper>
	        </Grid>
	      </Grid>
		</div>
		);
	}
}

class CustomSlide extends React.Component {
  render() {
    const { number, ...props } = this.props;
    const color = randomColor();
    return (
      <div style={{backgroundColor: color}} {...props}>
        <h3 >{number}</h3>
	      <Grid container spacing={24}>
	        <Grid item xs={12} sm={12}>
	          <Paper  >xs=12 sm=6</Paper>
	        </Grid>
	        <Grid item xs={12} sm={6}>
	          <Paper >xs=12 sm=6</Paper>
	        </Grid>
	        <Grid item xs={6} sm={3}>
	          <Paper>xs=6 sm=3</Paper>
	        </Grid>
	        <Grid item xs={6} sm={3}>
	          <Paper >xs=6 sm=3</Paper>
	        </Grid>
	        <Grid item xs={6} sm={3}>
	          <Paper >xs=6 sm=3</Paper>
	        </Grid>
	        <Grid item xs={6} sm={3}>
	          <Paper >xs=6 sm=3</Paper>
	        </Grid>
	      </Grid>
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
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        }
      ]
    };
    const data = [1, 2, 3, 4, 5]
    const holder = data.map((item) => <Card key={item.toString()} number={item}/>)
    return (
      <div style={{'backgroundColor': 'gray', 'width':'98%', height: '100%', 'margin':'0 auto'}}>
        <Slider name='SLIDER' style={{'height':'200px'}} {...settings}>
        	{holder}
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