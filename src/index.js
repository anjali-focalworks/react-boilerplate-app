import React from 'react'
import ReactDom from 'react-dom'
//import Routes from './config/routes.jsx'

import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom'
import App from './components/App'
import About from './components/About'

ReactDom.render(

   (<Router>
       <div>
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
       </div>
    
   </Router>),
   document.getElementById("root")
);