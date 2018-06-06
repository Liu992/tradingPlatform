import React, { Component } from 'react';
import './RouteInfo.scss';
import { Route, Redirect } from 'react-router-dom';

class RouteInfo extends Component {
  render() {
    let { routes } = this.props;
    return routes.map((item, index) => {
      return (
        <Route key={index} exact={item.exact} path={item.path} render={(props) => {
          return item.component ? <item.component {...props} route={item.children} /> : <Redirect to='/index/dcl' push={true} />
        }} />
      )
    })
  }
}

export default RouteInfo