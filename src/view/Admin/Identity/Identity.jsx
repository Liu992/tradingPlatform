import React, { Component } from 'react';
import './Identity.scss';
import Page from '../../../component/Page';

class Identity extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pagenum: 10,
      pagination: 1,
      allpagenum: 62
    }
  }
  atnum(num){
    this.setState({
      pagination: num
    })
  }
  render() {
    let { pagenum, pagination, allpagenum } = this.state;
    return (
      <div className="identity">
        <div className="identity-tab">
        <h1>Verify Account</h1>
          <div className="tablebox">
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>email</th>
                  <th>Id Document Type</th>
                  <th>Id Bill Type</th>
                  <th>Request At</th>
                  <th>verified</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>16</td>
                  <td>12345</td>
                  <td>18410172310@163.com</td>
                  <td>Ukjafsl</td>
                  <td>Unknow</td>
                  <td>2018-07-02 10:00:00</td>
                  <td>
                    <span>YES</span>
                  </td>
                  <td>
                    <i>查看</i>
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>12345</td>
                  <td>18410172310@163.com</td>
                  <td>Ukjafsl</td>
                  <td>Unknow</td>
                  <td>2018-07-02 10:00:00</td>
                  <td>
                    <span>YES</span>
                  </td>
                  <td>
                    <i>查看</i>
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>12345</td>
                  <td>18410172310@163.com</td>
                  <td>Ukjafsl</td>
                  <td>Unknow</td>
                  <td>2018-07-02 10:00:00</td>
                  <td>
                    <span>YES</span>
                  </td>
                  <td>
                    <i>查看</i>
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>12345</td>
                  <td>18410172310@163.com</td>
                  <td>Ukjafsl</td>
                  <td>Unknow</td>
                  <td>2018-07-02 10:00:00</td>
                  <td>
                    <span>YES</span>
                  </td>
                  <td>
                    <i>查看</i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Page pagination={pagination} allpagenum={allpagenum} pagenum={pagenum} atnum={this.atnum.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default Identity;