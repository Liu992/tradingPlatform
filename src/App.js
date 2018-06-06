import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import RouteInfo from './component/RouteInfo';
import RouteMap from './routerMap'
import { BrowserRouter as Router, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="wrapper">
        <Switch>
          <RouteInfo routes={RouteMap}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
