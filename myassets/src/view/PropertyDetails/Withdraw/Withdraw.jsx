import React, { Component } from 'react';
import './Withdraw.scss';

class Withdraw extends Component {
  render () {
    return (
      <div className="detail-withdraw">
        <h2>比特币提现</h2>
        <p className="bill-title">制定要提现的地址，输入提取数量，提交即可，10分钟之内到账。</p>
        <div className="detail-withdraw-form">
          <div className="form-col">
            <span className="tag">标签</span>
            <div className="form-cont">
              <a href="javascript:;">管理提现地址</a>
            </div>
          </div>
          <div className="form-col">
            <span className="tag">可用余额</span>
            <div className="form-cont">
              <b>0.0</b>
            </div>
          </div>
          <div className="form-col">
            <span className="tag">提取数量</span>
            <div className="form-cont">
              <p>
                <input type="text" placeholder="最低 0.001"/>
                <button>全部提取</button>
              </p>
              <a href="javascript:;">资费说明</a>
            </div>
          </div>
          <div className="form-col">
            <span className="tag">谷歌身份验证器</span>
            <div className="form-cont">
              <p>
                <input type="text" placeholder="6位数字密码"/>
              </p>
            </div>
          </div>
          <div className="form-col">
            <span className="tag"></span>
            <div className="form-cont">
              <div className="pass-title">
                谷歌验证器每三十秒会重新生成新密码，请及时输入。
              </div>
            </div>
          </div>
          <div className="form-col">
            <span className="tag"></span>
            <div className="form-cont">
              <button className="submit">提交</button>
            </div>
          </div>
        </div>
        <div className="withdraw-history">
          <h2>提现历史</h2>
          <table>
            <thead>
              <tr>
                <th>时间</th>
                <th>交易哈希</th>
                <th>充值金额</th>
                <th>确认数</th>
                <th>状态/操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Withdraw