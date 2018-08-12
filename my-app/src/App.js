import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MiniDrawer from './components/Header';
import LandingPage from './components/LandingPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <BrowserRouter>
        <Switch>
          <Route  exact path="/" component={LandingPage}/>
          <Route  component={MiniDrawer} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
