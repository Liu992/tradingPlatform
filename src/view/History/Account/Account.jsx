import React, { Component } from 'react';
import './Account.scss';

class Account extends Component {
  render() {
    return (
      <div className="account">
        <table>
          <thead>
            <tr>
              <th>类型</th>
              <th>时间</th>
              <th>货币</th>
              <th>金额</th>
              <th>手续费</th>
              <th>交易哈希</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    )
  }
}

export default Account