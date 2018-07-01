import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});


function SingleLineGridList(props) {
	const classes = theme => ({
	  root: {
	    display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'space-around',
	    overflow: 'hidden',
	    backgroundColor: theme.palette.background.paper,
	  },
	  gridList: {
	    flexWrap: 'nowrap',
	    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
	    transform: 'translateZ(0)',
	  },
	  title: {
	    color: theme.palette.primary.light,
	  },
	  titleBar: {
	    background:
	      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	  },
	});
  const tileData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} style={{'backgroundColor': 'blue'}} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile style={{'backgroundColor': 'red'}} key={tile}>
            <GridListTileBar classes={{root: classes.titleBar,title: classes.title}}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

class RecommendationEngine extends React.Component {

	render(){
		return (
			<div style={{'backgroundColor': 'red', 'width':'100%', height: '38vh', 'position': 'relative'}}>
			<SingleLineGridList classes={styles}/>
			</div>
		);
	}
}

export default RecommendationEngine;