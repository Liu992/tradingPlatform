import React, { Component } from 'react';
import './Control.scss';

class Control extends Component {
  render() {
    return (
      <div className="control">
        <div className="tab-top table">
          <h1>Currencies Summary</h1>
          <div className="tablebox">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Locked</th>
                  <th>Balance</th>
                  <th>Sum</th>
                  <th>Hot-Wallet Balance</th>
                  <th>Cold-Wallet Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12345</td>
                  <td>12345</td>
                  <td>12345</td>
                  <td>12345</td>
                  <td>12345</td>
                  <td>12345</td>
                </tr>
              </tbody>
            </table>
           
          </div>
          <p>
              Tips: Locked + Balance = Sum | Hot-Wallet + Cold-Wallet = Sum
            </p>
        </div>
        <div className="tab-bottom">
          <div className="tab-b-1 table">
            <h1>Daemon Statuses</h1>
            <div className="tablebox">

              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>State</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>deposit_coin.rb</td>
                    <td>running</td>
                  </tr>
                  <tr>
                    <td>deposit_coin.rb</td>
                    <td>running</td>
                  </tr>
                  <tr>
                    <td>deposit_coin.rb</td>
                    <td>running</td>
                  </tr>
                  <tr>
                    <td>deposit_coin.rb</td>
                    <td>running</td>
                  </tr>
                  <tr>
                    <td>deposit_coin.rb</td>
                    <td>running</td>
                  </tr>
                  <tr>
                    <td>deposit_coin.rb</td>
                    <td>running</td>
                  </tr>
                  <tr>
                    <td>deposit_coin.rb</td>
                    <td>running</td>
                  </tr>
                </tbody>
              </table></div>
          </div>
          <div className="tab-b-2 table">
            <h1>Exchange Summary</h1>
            <div className="tablebox">
              <table>
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>deposit_coin.rb</td>
                    <td>running</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Control;