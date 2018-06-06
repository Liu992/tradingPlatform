import React, { Component } from 'react';
import './ApiHeader.scss';
import { NavLink } from 'react-router-dom'

class ApiHeader extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div className="apiheader">
          <div className="nav navbar-left">
            <i></i>
            <span>Peatio API Document</span>
          </div>
        <ul className="nav navbar-right">
          <li>
            <NavLink to="/index/settings"><i className="fa fa-user"></i>1234567890@163.com</NavLink>
          </li>
          <li>
            <NavLink to="/index/settings"><i className="fa fa-user"></i>安全退出</NavLink>
          </li>
          <li>
            <a href="javascript:;">
              <em className="dropdown-toggle"></em>
              <img className="dropdown-toggle" src={require('../../assets/image/languages/en.png')} alt=""/>
              <b className="dropdown-toggle"></b>
              <i className="dropdown-toggle"></i>
            </a>
            <ul>
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

export default ApiHeader