import React, { Component } from 'react';
import './History.scss';
import {Link} from 'react-router-dom';
import RouteInfo from '../../component/RouteInfo';

class History extends Component {
  constructor (props) {
    super(props);
    this.state = {
      recordList: [
        {
          id:1,
          title: '委托记录',
          path: '/index/history/orders'
        },
        {
          id:2,
          title: '成交记录',
          path: '/index/history/trades'
        },
        {
          id:3,
          title: '账户记录',
          path: '/index/history/account'
        }
      ],
      defaultActive: 1
    }
  }
  checkActive (id) {
    this.setState({
      defaultActive: id
    })
  }
  render() {
    let { route } = this.props;
    let { recordList, defaultActive } = this.state;
    return (
      <div className="history">
        <nav className="nav">
          {
            recordList.map((item, ind) => {
              return <Link key={item.id} className={`${item.id === defaultActive?'active':''}`} to={item.path} onClick={this.checkActive.bind(this,item.id)}>委托记录</Link>
            })
          }
        </nav>
        <RouteInfo routes={route}/>
      </div>
    )
  }
}

export default History