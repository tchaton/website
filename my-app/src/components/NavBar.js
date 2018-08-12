import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {BrowserRouter, Link} from 'react-router-dom';
import FingerPrintIcon from '@material-ui/icons/Fingerprint';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

export const SelectionListItems = (
  <div>
  <Link to='/selection'>
    <ListItem button>
      <ListItemIcon>
        <FingerPrintIcon />
      </ListItemIcon>
      <ListItemText primary="Selection" />
    </ListItem>
  </Link>
  </div>
);

export const RecommendationListItems = (
  <div>
    <Link to='/recommendation'>
      <ListItem button>
      <ListItemIcon>
        <LoyaltyIcon />
      </ListItemIcon>
        <ListItemText primary="Recommendation" />
      </ListItem>
    </Link>
  </div>
);