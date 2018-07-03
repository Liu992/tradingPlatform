import React, { Component } from 'react';
import './Identity.scss';

class Identity extends Component {
  render() {
    return (
      <div className="identity">
        <div className="identity-tab">
        <h1>Verify Account</h1>
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
        </div>
      </div>
    )
  }
}

export default Identity;