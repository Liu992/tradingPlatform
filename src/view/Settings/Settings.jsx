import React, { Component } from 'react';
import './Settings.scss';

class Settings extends Component {
  render() {
    return (
      <div className="settings">
        <div className="settings-box">
          <div className="settings-header">
            <h3>用户设置</h3>
          </div>
          <div className="settings-details">
            <div className="settings-left">
              <h4>用户</h4>
              <h4>18410172310@163.com</h4>
              <span>管理并修改您的个人资料及绑定信息</span>
              <p>您应启用全部 <b>安全设置<i></i></b>，以保障账户及资金安全。</p>
            </div>
            <div className="settings-right">
              <div className="settings-item">
                <div className="settings-item-left">
                  <i><img src={require('../../assets/image/languages/en.png')} alt=""/></i>
                </div>
                <div className="settings-item-center">
                  <h1>邮箱验证</h1>
                  <p>您的邮箱已验证通过，请牢记并保护好此邮箱地址，这是您作为登录的唯一账户。</p>
                </div>
                <div className="settings-item-right">
                  <button>已绑定</button>
                </div>
              </div>
              <div className="settings-item">
                <div className="settings-item-left">
                  <i><img src={require('../../assets/image/languages/en.png')} alt=""/></i>
                </div>
                <div className="settings-item-center">
                  <h1>邮箱验证</h1>
                  <p>您的邮箱已验证通过，请牢记并保护好此邮箱地址，这是您作为登录的唯一账户。</p>
                </div>
                <div className="settings-item-right">
                  <button>已绑定</button>
                </div>
              </div>
              <div className="settings-item">
                <div className="settings-item-left">
                  <i><img src={require('../../assets/image/languages/en.png')} alt=""/></i>
                </div>
                <div className="settings-item-center">
                  <h1>邮箱验证</h1>
                  <p>您的邮箱已验证通过，请牢记并保护好此邮箱地址，这是您作为登录的唯一账户。</p>
                </div>
                <div className="settings-item-right">
                  <button>已绑定</button>
                </div>
              </div>
              <div className="settings-item">
                <div className="settings-item-left">
                  <i><img src={require('../../assets/image/languages/en.png')} alt=""/></i>
                </div>
                <div className="settings-item-center">
                  <h1>邮箱验证</h1>
                  <p>您的邮箱已验证通过，请牢记并保护好此邮箱地址，这是您作为登录的唯一账户。</p>
                </div>
                <div className="settings-item-right">
                  <button>已绑定</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings