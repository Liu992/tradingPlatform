import React, { Component } from 'react';
import './Header.scss';
import { BrowserRouter as router, NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="haader">
        <ul className="nav navbar-left">
          <li>
            <NavLink to="/">
              <i></i>
              <span>DCL</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/markets">
              <i></i>
              <span>交易大厅</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/funds">
              <i></i>
              <span>我的资产</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/exchange_assets">
              <i></i>
              <span>资产公开</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/history">
              <i></i>
              <span>历史记录</span>
            </NavLink>
          </li>
        </ul>
        <ul className="nav navbar-right">
          <li className="dropdown account-settings">
            <a className="dropdown-toggle" href="javascript:;">1234567890@163.com</a>
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/settings">
                  <i></i>
                  <span>用户设置</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/tickets">
                  <i></i>
                  <span>服务单</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/signout">
                  <i></i>
                  <span>安全退出</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;">
              <img src={require('../../assets/image/languages/en.png')} alt=""/>
            </a>
            <ul className="dropdown-menu" id="languages">
              <li>
                <a href="javascript:;">
                  <img src={require('../../assets/image/languages/en.png')} alt=""/>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src={require('../../assets/image/languages/ko.png')} alt=""/>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src={require('../../assets/image/languages/zh-CN.png')} alt=""/>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header