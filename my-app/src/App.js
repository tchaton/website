import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MiniDrawer from './components/NavBar';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
       <MiniDrawer />
    </React.Fragment>
  );
}

export default App;
