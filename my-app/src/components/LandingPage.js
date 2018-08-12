import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

/**
 * Landing page without header or sidebar.
 */

LandingPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

function LandingPage(props) {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <video autoPlay muted loop className={classes.videoBackground}>
                <source src="videos/a5oYr2G_460svvp9.webm" type="video/webm" />
                Your browser does not support HTML5 video.
            </video>
            <h1>Much LandingPage</h1>
            <Link to="/home" className={classes.webappLink}>Let's go</Link>
        </div>
    );
}

const styles = theme => ({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'greenyellow',
    },
    webappLink: {
        color: 'greenyellow',
    },
    videoBackground: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: '-1',
    },
});



export default withStyles(styles)(LandingPage);

