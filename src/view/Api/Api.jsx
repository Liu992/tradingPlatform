import React, { Component } from 'react';
import './Api.scss';
import ApiHeader from '../../component/ApiHeader';
import RouteInfo from '../../component/RouteInfo';

class Api extends Component {
  render() {
    let {route} = this.props;
    return (
      <div className="api">
        <ApiHeader/>
        <RouteInfo routes={route}/>
        <footer>
          footer
        </footer>
      </div>
    )
  }
}

export default Api