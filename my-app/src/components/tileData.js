import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {BrowserRouter, Link} from 'react-router-dom';


export const SelectionListItems = (
  <div>
  <Link to='/Selection'>
    <ListItem button>
      <ListItemText primary="Selection" />
    </ListItem>
  </Link>
  </div>
);

export const RecommendationListItems = (
  <div>
    <Link to='/toto'>
      <ListItem button>
        <ListItemText primary="Recommendation" />
      </ListItem>
    </Link>
  </div>
);