import React, { Component } from 'react';
import './GoogleAuth.scss';
import { Input, Button } from 'antd';

class GoogleAuth extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div className="googleauth">
        <div className="googleauth-box">
          <div className="googleauth-header">
            <h3>两步验证</h3>
          </div>
          <div className="googleauth-details">
            <div className="googleauth-left">
              <h4>两步验证</h4>
              <ul>
                <li>
                  <a href="https://itunes.apple.com/cn/app/google-authenticator/id388497605?mt=8">
                    <i className="fa fa-apple"></i>
                    <span>苹果 iOS 系统</span>
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2">
                    <i className="fa fa-android"></i>
                    <span>谷歌安卓系统</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="googleauth-right">
              <div className="googleauth-right-item">
                <h3>第一步</h3>
                <p>
                  根据您使用的手机系统类型，点击左侧快捷入口，下载并打开 Google Authenticator 应用到您的智能手机上。具体操作方式可
                  <a href="https://support.google.com/accounts/answer/1066447?hl=zh-Hans">点击这里</a>。  
                </p>
              </div>
              <div className="googleauth-right-item">
                <h3>第二步</h3>
                <p>用 Google Authenticator 应用扫瞄二维码或将以下密文手动添加到验证器中。</p>
                <div className="item-cont">
                  <div className="item-cont-col">
                    <b>二维码</b>
                    <img src={require('../../assets/image/wechat.png')} alt=""/>
                  </div>
                  <div className="item-cont-col">
                    <b><abbr title="必须的">*</abbr>密文</b>
                    <div className="ciphertext">
                      <Input disabled placeholder="jsdljskaljfjslkajf"/><Button><i className="fa fa-refresh"></i></Button>
                    </div>
                  </div>
                </div>
                <div className="googleauth-right-item">
                  <h3>第三步</h3>
                  <p>
                    填入手机显示的动态密码以激活两步验证
                  </p>
                  <div className="item-cont">
                    <div className="item-cont-col">
                      <b>验证器上的密码</b>
                      <Input/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default GoogleAuth