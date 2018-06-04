import React, { Component } from 'react';
import './ResetPassword.scss';
import { Input, Button } from 'antd';

class ResetPassword extends Component {
  constructor (props) {
    super(props)
  }
  toBack () {
    let { history } = this.props;
    history.go(-1)
  }
  render() {
    return (
      <div className="signin">
        <div className="signin-box">
          <div className="signin-header">
            <h3>登录密码</h3>
          </div>
          <div className="signin-details">
            <div className="signin-left">
              <h4>重置登录密码</h4>
              <p>请您输入您创建账户时的邮箱地址，输入验证码提交后，进入邮箱，根据提示重置密码。</p>
            </div>
            <div className="signin-right">
              <div className="signin-right-item">
                <div className="item-cont">
                  <div className="item-cont-col">
                    <b><abbr title="必须的">*</abbr>邮箱地址</b>
                    <div className="col-input">
                      <Input placeholder="例如：xiaobai@example.com"/>
                    </div>
                  </div>
                </div>
                <div className="signin-btn">
                  <Button type="primary" className="signin-btn-cancel" onClick={this.toBack.bind(this)}>取消</Button>
                  <Button type="primary" className="signin-btn-sure">发送重置请求</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ResetPassword