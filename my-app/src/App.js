import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MiniDrawer from './components/Header';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/Main'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
       <MiniDrawer />
    </React.Fragment>
  );
}

export default App;
