import React, { Component } from 'react';
import './Dom.scss';

class Dom extends Component {
  render() {
    return (
      <div className="dom">
        <table>
          <thead>
            <tr>
              <th className="key ordered asc">
                <div className="order">
                  <a className="asc" href="#">↑</a>
                  <a className="desc" href="#">↓</a>
                </div>
                Key
            </th>
              <th className="key ordered asc">
                <div className="order">
                  <a className="asc" href="#">↑</a>
                  <a className="desc" href="#">↓</a>
                </div>
                Title
            </th>
              <th className="key ordered asc">
                <div className="order">
                  <a className="asc" href="#">↑</a>
                  <a className="desc" href="#">↓</a>
                </div>
                Title
            </th>
            </tr>
          </thead>
          <tbody>
            <tr><td>没有任何数据查询结果</td><td></td></tr>
          </tbody>
        </table>
        <a className="btn" href="/admin/newdom">新建文档</a>
      </div>
    )
  }
}

export default Dom;