import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Controler from './Controler'
import RecommendationEngine from './RecommendationEngine'

const styles = theme => ({
  main: {
  	backgroundColor:'white',
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
    center={!props.is_searched ? { lat: -34.397, lng: 150.644 } : { lat: props.lat, lng: props.lng }}
  >
  </GoogleMap>
);

class Main extends React.Component{

	constructor(props){
		super(props);
		this.handleSearch = this.handleSearch.bind(this)
		this.state = {'lat':0, 'lng':0, 'is_searched':false};
	}

	handleSearch(places){
		const location = places[0].geometry.location
		this.setState({'lat':location.lat(), 'lng':location.lng(), 'is_searched':true});
	}
	render() {
		const {classes} = this.props;
		return (
			<div classNames={classNames(classes.main, true)}>
				<MapWithAMakredInfoWindow
				  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
				  loadingElement={<div style={{ height: `100%` }} />}
				  containerElement={<div style={{ height: `400px` }} />}
				  mapElement={<div style={{ height: `100%` }} />}
				  lat={this.state.lat}
				  lng={this.state.lng}
				  is_searched={this.state.is_searched}
				/>
				<Controler handleSearch={this.handleSearch}/>
				<RecommendationEngine />
			</div>
		);
	}
}

export default withStyles(styles)(Main);