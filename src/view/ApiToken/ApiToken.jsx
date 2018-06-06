import React, { Component } from 'react';
import './ApiToken.scss';
import { NavLink } from 'react-router-dom';

class ApiToken extends Component {
  constructor (props) {
    super(props)
    this.state = {
      content: ''
    }
  }
  toBack () {
    let { history } = this.props;
    history.go(-1)
  }
  render() {
    let { content } = this.state;
    return (
      <div className="apitoken">
        <div className="apitoken-box">
          <div className="apitoken-header">
            <h3>API密钥</h3>
          </div>
          <div className="apitoken-details">
            <div className="apitoken-left">
              <h4>我的API密钥</h4>
              <p>我们为您提供了功能完备，高性能的自动化交易API，通过API您能够得到当前市场行情，建立买单卖单，查询自己的委托及成交记录，查询账户余额及个人信息。</p>
              <ul>
                <li>
                  <NavLink to="/api/httpapi" target="_blank">
                    <span>HTTP API 文档</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/api/websocketapi" target="_blank">
                    <span>Websocket API 文档</span>
                  </NavLink>
                </li>
              </ul>
              <span>更多API信息请查看Github上的API章节</span>
              <ul>
                <li>
                  <a href="https://github.com/peatio/peatio#api" target="_blank">
                    <span>https://github.com/peatio/peatio#api</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="apitoken-right">
              <button className="newpass">创建新密码</button>
              <table>
                <thead>
                  <tr>
                    <th>标签</th>
                    <th>Access Key</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className={`${content?'':'none'}`}>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
              <p className={`${content?'none':''}`}>没有API密钥</p>
            </div>
          </div>
        </div>


        <div className="apitoken-box">
          <div className="apitoken-header">
            <h3>应用绑定</h3>
          </div>
          <div className="apitoken-details">
            <div className="apitoken-left">
              <h4>已绑定的第三方应用</h4>
              <p>管理所有您绑定过的第三方应用。</p>
              <ul>
                <li>
                  <NavLink to="/resetpassword">
                    <span>oAuth认证接口文档</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="apitoken-right">
              <table>
                <thead>
                  <tr>
                    <th>应用名称</th>
                    <th>授权自动过期时间</th>
                    <th>授权范围</th>
                  </tr>
                </thead>
                <tbody className={`${content?'':'none'}`}>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
              <p className={`${content?'none':''}`}>没有API密钥</p>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default ApiToken