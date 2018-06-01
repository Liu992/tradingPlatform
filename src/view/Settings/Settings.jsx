import React, { Component } from 'react';
import './Settings.scss';
import Warning from '../../component/Warning'

class Settings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: true
    }
    this.onCloseWarn = this.onCloseWarn.bind(this)
  }
  toEdit (path) {
    let { history } = this.props
    if (typeof path === 'string') {
      history.push(path)
    }
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
              <p>您应启用全部 <b>安全设置<i className="fa fa-bolt text-warning"></i></b>，以保障账户及资金安全。</p>
            </div>
            <div className="settings-right">
              <Warning visible={visible} title={"邮箱已经发送至您的邮箱，请您尽快进入您的邮箱进行验证，如未收到请点击再次发送。"} mold={'info'} close={this.onCloseWarn}/>
              <div className="settings-item">
                <div className="settings-item-left">
                  <i className="fa fa-envelope-o fa-2x"></i>
                </div>
                <div className="settings-item-center">
                  <h1>邮箱验证</h1>
                  <p>您的邮箱已验证通过，请牢记并保护好此邮箱地址，这是您作为登录的唯一账户。</p>
                </div>
                <div className="settings-item-right">
                  <button className="btn-default" onClick={this.toEdit.bind(this)}>再次发送</button>
                </div>
              </div>
              <div className="settings-item">
                <div className="settings-item-left">
                  <i className="fa fa-thumbs-o-up fa-2x"></i>
                </div>
                <div className="settings-item-center">
                  <h1>实名认证<i className="fa fa-bolt text-warning"></i></h1>
                  <p>为配合国家相关法令条例，请您正确输入信息，进行身份认证，身份认证未完成将不能在网站进行任何操作。</p>
                </div>
                <div className="settings-item-right">
                  <button className="btn-default" onClick={this.toEdit.bind(this, '/verify')}>设置</button>
                </div>
              </div>
              <div className="settings-item">
                <div className="settings-item-left">
                  <i className="fa fa-mobile fa-4x"></i>
                </div>
                <div className="settings-item-center">
                  <h1>手机绑定<i className="fa fa-bolt text-warning"></i></h1>
                  <p>绑定手机号码，让您的资金更安全，您可以即时收到在网站操作的动态提醒并及时监控账号安全。</p>
                </div>
                <div className="settings-item-right">
                  <button className="btn-default" onClick={this.toEdit.bind(this, '/smsauth')}>设置</button>
                </div>
              </div>
              <div className="settings-item">
                <div className="settings-item-left">
                  <i className="fa fa-superscript fa-2x"></i>
                </div>
                <div className="settings-item-center">
                  <h1>两步验证<i className="fa fa-bolt text-warning"></i></h1>
                  <p>两步验证为您的帐户额外添加了一层保护。</p>
                </div>
                <div className="settings-item-right">
                  <button className="btn-default" onClick={this.toEdit.bind(this, '/googleauth')}>设置</button>
                </div>
              </div>
              <div className="settings-item">
                <div className="settings-item-left">
                  <i className="fa fa-key fa-2x"></i>
                </div>
                <div className="settings-item-center">
                  <h1>登陆密码</h1>
                  <p>此密码仅限作网站登录使用，请您牢记。</p>
                </div>
                <div className="settings-item-right">
                  <button className="btn-default" onClick={this.toEdit.bind(this, '/editpass')}>修改</button>
                </div>
              </div>
              <div className="settings-item">
                <div className="settings-item-left">
                  <i className="fa fa-code fa-2x"></i>
                </div>
                <div className="settings-item-center">
                  <h1>API密钥</h1>
                  <p>申请和管理您的API密钥</p>
                </div>
                <div className="settings-item-right">
                  <button className="btn-default" onClick={this.toEdit.bind(this)}>设置</button>
                </div>
              </div>
              <div className="settings-item">
                <div className="settings-item-left">
                  <i className="fa fa-weibo fa-2x"></i>
                </div>
                <div className="settings-item-center">
                  <h1>绑定微博</h1>
                  <p>绑定微博后您可以通过微博进行登录, 而无需每次都输入账号密码.</p>
                </div>
                <div className="settings-item-right">
                  <button className="btn-default" onClick={this.toEdit.bind(this)}>绑定</button>
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