import 'react-dates/initialize'
import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Controler from './Controler'
import RecommendationEngine from './RecommendationEngine'
import FullWidthGrid from './FullWidthGrid'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

import { DateRangePicker } from 'react-dates';


var SelectedStartDate = moment('2017-05-05');
var SelectedEndDate = moment('2017-05-09');


const styles = theme => ({
  main: {
  	backgroundColor:'blue',
  	position: 'relative',
	}
});

const styles2 = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
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
		this.state = {'places':{}, 
					  'is_searched':false, 
					  'destination':{},
					  focusedInput: null,
        			  startDate: SelectedStartDate,
        			  endDate:SelectedEndDate};
       	this.onDatesChange = this.onDatesChange.bind(this);
    	this.onFocusChange = this.onFocusChange.bind(this);
	}

	onDatesChange({ startDate, endDate }) {

	    this.setState({ startDate, endDate });
	}

	onFocusChange(focusedInput) {
	    this.setState({ focusedInput });
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
		const { focusedInput, startDate, endDate } = this.state;
		return (
			<div name='main_holder' className={classNames(classes.main, true)} >
		      <Grid container spacing={24}>
		        <Grid item xs={12} sm={5}>
		       	 <Paper style={{'height':'25vh'}} className={classes.paper}>
		          	<Controler handleSearch={this.handleSearch}/>
		          </Paper>
		        </Grid>
		        <Grid item xs={12} sm={7}>
		          <Paper style={{'height':'25vh'}} className={classes.paper}>
		      		<MapWithAMakredInfoWindow
					  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
					  loadingElement={<div style={{ height: `100%` }} />}
					  containerElement={<div style={{ height: `100%` }} />}
					  mapElement={<div style={{ height: `100%`, width: `100%` }} />}
					  places={this.state.places}
					  is_searched={this.state.is_searched}
					/>
		          </Paper>
		        </Grid>
		        <Grid item xs={12} sm={12}>
		          <Paper style={{'height':'61vh'}} className={classes.paper}>
		          	<RecommendationEngine />
		          </Paper>
		        </Grid>
		      </Grid>
			</div>
		);
	}
}

export default withStyles(styles)(Main);