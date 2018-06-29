import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Controler from './Controler'

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
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        <FaAnchor />
      </InfoWindow>}
    </Marker>
  </GoogleMap>
);


class Main extends React.Component{

	render() {
		const {classes} = this.props;
		return (
			<div classNames={classNames(classes.main, true)}>
				<MapWithAMakredInfoWindow
				  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
				  loadingElement={<div style={{ height: `100%` }} />}
				  containerElement={<div style={{ height: `400px` }} />}
				  mapElement={<div style={{ height: `100%` }} />}
				/>
				<Controler/>
			</div>
		);
	}

}

export default withStyles(styles)(Main);