import React, { Component } from 'react';
import './Trades.scss';

class Trades extends Component {
  render() {
    return (
      <div className="trades">
        <table>
          <thead>
            <tr>
              <th>类型</th>
              <th>时间</th>
              <th>基准货币</th>
              <th>数量</th>
              <th>报价货币</th>
              <th>数量</th>
              <th>成交价</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Trades