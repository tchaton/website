import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Controler from './Controler'
import RecommendationEngine from './RecommendationEngine'

const styles = theme => ({
  main: {
  	backgroundColor:'white',
  	position: 'relative',
	}
});

const { compose, withProps, withStateHandlers } = require("recompose");
const FaAnchor = require("react-icons/lib/fa/anchor");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const MapWithAMakredInfoWindow = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={10}
    center={!props.is_searched ? { lat: -34.397, lng: 150.644 } : { lat: props.places.lat, lng: props.places.lng }}
  >
  </GoogleMap>
);

class Main extends React.Component{

	constructor(props){
		super(props);
		this.handleSearch = this.handleSearch.bind(this)
		this.state = {'places':{}, 'is_searched':false, 'destination':{}};
	}

	componentWillMount(){
		const places = sessionStorage.getItem('places');
		//const destination = sessionStorage.getItem('destination');
		if (places) {
			//console.log(places);
      		this.setState({ 'places': JSON.parse(places), 'is_searched': true});//, 'destination':JSON.parse(destination)});
      		// NOT SURE THE DESTINATION IS CORRECTLY LOADED
      		//console.log('blab la');
      		//const dest = this.state.destination
      		//console.log(this.state.destination)
      	return;
		}
	}
	componentWillUnmount(){
		console.log(this.state.places)
		console.log(this.state.destination)
		console.log('Here')
		sessionStorage.setItem('places', JSON.stringify(this.state.places));
		//sessionStorage.setItem('destination', JSON.stringify(this.state.destination));
		//const places = sessionStorage.getItem('places');
		//const destination = sessionStorage.getItem('destination');
		//console.log(JSON.parse(destination))
	}

	handleSearch(places){
		const destination = places[0]
		const location = destination.geometry.location
		this.setState({'places':{'lat':location.lat(), 'lng':location.lng()}, 'is_searched':true, 'destination':destination});
	}
	render() {
		const {classes} = this.props;
		return (
			<div classNames={classNames(classes.main, true)} >
				<MapWithAMakredInfoWindow
				  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
				  loadingElement={<div style={{ height: `100%` }} />}
				  containerElement={<div style={{ height: `400px` }} />}
				  mapElement={<div style={{ height: `100%` }} />}
				  places={this.state.places}
				  is_searched={this.state.is_searched}
				/>
				<Divider />
				<br />
				<Controler handleSearch={this.handleSearch}/>
				<br />
				<Divider />
				<RecommendationEngine />
			</div>
		);
	}
}

export default withStyles(styles)(Main);