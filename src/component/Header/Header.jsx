import React, { Component } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom'

let navlist = [
  {
    id: 1,
    path: '/markets',
    iconfont: 'fa fa-exchange',
    text: '交易大厅'
  },
  {
    id: 2,
    path: '/funds',
    iconfont: 'fa fa-money',
    text: '我的资产'
  },
  {
    id: 3,
    path: '/exchange_assets',
    iconfont: 'fa fa-bar-chart-o',
    text: '资产公开'
  },
  {
    id: 4,
    path: '/history',
    iconfont: 'fa fa-book',
    text: '历史记录'
  }
];
let a = 0;
let b = 0;
class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ind: 0,
      ind1: 0,
      on: false
    }
  }
  addOpen (id) {
    this.setState({
      ind: id
    })
  }
  openSelect (id, e) {
    if (id ==1) {
      b=0
      a++;
    } else {
      a=0;
      b++;
    }
    if (a>=2||b>=2) {
      a=0
      b=0
      this.setState({
        ind1: id,
        on: false
      })
    } else {
      this.setState({
        ind1: id,
        on: true
      })
    }
  }
  componentDidMount () {
    let that = this;
    document.onclick = function (e) {
      if (e.target.className!=='dropdown-toggle'){
        a=0
        b=0
        that.setState({
          ind1: 0,
          on: false
        })
      }
    }
  }
  render() {
    let { ind, ind1, on } = this.state;
    return (
      <div className="header">
        <div className="container">
          <ul className="nav navbar-left">
              <NavLink to="/" tag="b">
                <i></i>
                <span>DCL</span>
              </NavLink>
              {
                navlist.map((item, index) => {
                  return (
                    <li key={item.id} className={ind === item.id?'open':''} style={{background: ind===item.id?'#3498db':''}} onClick={this.addOpen.bind(this, item.id)}>
                      <NavLink to={item.path}>
                        <i className={item.iconfont}></i>
                        <span>{item.text}</span>
                      </NavLink>
                    </li>
                  )
                })
              }
          </ul>
        <ul className="nav navbar-right">
          <li className={`dropdown account-settings ${on&&ind1 == 1?'openselect':''}`} onClick={this.openSelect.bind(this, 1)}  style={{background: on&&ind1===1?'#196090':''}}>
            <a className="dropdown-toggle" href="javascript:;">1234567890@163.com<b  className="dropdown-toggle"></b><em className="dropdown-toggle"></em></a>
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/settings">
                  <i className="fa fa-user"></i>
                  <span>用户设置</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/tickets/list">
                  <i className="fa fa-comments"></i>
                  <span>服务单</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/signin">
                  <i className="fa fa-sign-out"></i>
                  <span>安全退出</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={`dropdown ${on&&ind1 == 2?'openselect':''}`} onClick={this.openSelect.bind(this, 2)} style={{background: on&&ind1===2?'#196090':''}}>
            <a  className="dropdown-toggle" href="javascript:;">
              <em className="dropdown-toggle"></em>
              <img className="dropdown-toggle" src={require('../../assets/image/languages/en.png')} alt=""/>
              <b className="dropdown-toggle"></b>
              <i className="dropdown-toggle"></i>
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
        </ul></div>
      </div>
    )
  }
}

export default Header