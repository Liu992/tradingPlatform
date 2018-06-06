import React, { Component } from 'react';
import './Dcl.scss';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import RouteInfo from '../../component/RouteInfo';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

class Dcl extends Component {
  render() {
    let { route } = this.props
    console.log(route)
    return (
      <Router>
      <div className="wrap-box">
        <Header/>
          <RouteInfo routes={route}/>
        <Footer/>
      </div>
      </Router>
    )
  }
}

export default Dcl