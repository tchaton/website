import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('root');
  ReactDOM.render(
  	<BrowserRouter>
  		<App style={{"height": "100%"}/>
	</BrowserRouter>
  	, div);
  ReactDOM.unmountComponentAtNode(div);
});
