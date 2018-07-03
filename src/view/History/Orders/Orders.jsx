import React, { Component } from 'react';
import './Orders.scss';

class Orders extends Component {
  render() {
    return (
      <div className="orders">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>类型</th>
              <th>状态</th>
              <th>货币对</th>
              <th>委托价</th>
              <th>委托数量</th>
              <th>平均成交价</th>
              <th>成交数量</th>
              <th>委托时间</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Orders