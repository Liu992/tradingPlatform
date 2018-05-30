import React, { Component } from 'react';
import './Property.scss';
import PropertyDetails from '../PropertyDetails';
import PropertyList from '../PropertyList';

class Property extends Component {
  render() {
    return (
      <div className="property">
        <h1>我的资产</h1>
        <div className="panel">
          <PropertyList/>
          <PropertyDetails/>
        </div>
      </div>
    )
  }
}

export default Property