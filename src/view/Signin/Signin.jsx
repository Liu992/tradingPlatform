import React, { Component } from 'react';
import './Signin.scss';
import { Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import Warning from '../../component/Warning';

class Signin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: true
    }
    this.onCloseWarn = this.onCloseWarn.bind(this)
  }
  toBack () {
    let { history } = this.props;
    history.go(-1)
  }
  onCloseWarn (or) {
    this.setState({
      visible: or
    })
    console.log(or)
  }
  render() {
    let { visible } = this.state;
    return (
      <div className="signin">
        <div className="signin-box">
          <div className="signin-header">
            <h3>登录</h3>
          </div>
          <div className="signin-details">
            <div className="signin-left">
              <h4>登录我的账户</h4>
              <p>现在登录，以便您开始交易，随时关注交易动态。</p>
              <ul>
                <li>
                  <NavLink to="/resetpassword">
                    <span>忘记密码</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup">
                    <span>创建账户</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="signin-right">
            <Warning visible={visible} title={"您输入的密码和邮箱地址不正确，请重新输入。"} mold={'error'} close={this.onCloseWarn}/>
              <div className="signin-right-item">
                <div className="item-cont">
                  <div className="item-cont-col">
                    <b><abbr title="必须的">*</abbr>登录邮箱</b>
                    <div className="col-input">
                      <Input placeholder="邮箱地址"/>
                    </div>
                  </div>
                  <div className="item-cont-col">
                    <b><abbr title="必须的">*</abbr>登录密码</b>
                    <div className="col-input">
                      <Input placeholder="密码"/>
                    </div>
                  </div>
                  <p>请输入至少六位密码，建议包含大写、小写字母与数字。</p>
                  <div className="item-cont-col">
                    <b><abbr title="必须的">*</abbr>验证码</b>
                    <div className="col-input">
                      <Input placeholder="请输入图片中的字符"/>
                      <img src="https://aubitex.com/simple_captcha?code=83268db97b84e8891fcdd145ef3789b2386028a6&time=1527833469" alt=""/>
                    </div>
                  </div>
                  <p>不区分大小写，如果看不清请刷新页面</p>
                </div>
                <div className="signin-btn">
                  <Button type="primary" className="signin-btn-cancel" onClick={this.toBack.bind(this)}>取消</Button>
                  <Button type="primary" className="signin-btn-sure">确认</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signin