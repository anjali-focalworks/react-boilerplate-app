import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import App from '../components/App.js';
import About from '../components/About';



// import 'styles/index.scss'; /* commented index.scss -GM */
const Routes = () => (
  <Router>
    <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
  </Router>
);

export default Routes;
