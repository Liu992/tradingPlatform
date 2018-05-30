import React, { Component } from 'react';
import './Deposit.scss';
import { Select, InputNumber } from 'antd';
import Dialog from '../../../component/Dialog';
import CommonDialog from '../../../component/CommonDialog'
const Option = Select.Option;


class Deposit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      visible1: false
    }
  }
  // 充值账号管理下拉菜单
  handleChange1(value) {
    console.log(`selected ${value}`);
  }
  // 充值金额 val
  onChangeVal(value) {
    console.log('changed', value);
  }
  // 点击管理弹出框
  addAccount = () => {
    this.setState({
      visible: true
    })
  }
  // 关闭弹出框管理
  orClose = (on) => {
    this.setState({
      visible: on
    })
  }
  // 关闭弹出框新地址
  orClose1 = (on) => {
    this.setState({
      visible1: on
    })
  }
  // 点击弹窗确认按钮的回调
  onSure = (tit) => {
    console.log(tit)
  }
  // 点击生成新地址
  addAddress () {
    this.setState({
      visible1: true
    })
  }
  render() {
    let { visible, visible1 } = this.state;
    return (
      <div className="detail-deposit">
        <h2>比特币充值</h2>
        {/* 除美元 */}
        <div className="deposit-content">
          <div className="deposit-content-col">
            <h4>1</h4>
            <p className="col-text"> 请使用您常用的钱包服务，本地钱包、在线钱包或移动端的钱包，选择付款或发送。 </p>
          </div>
          <hr className="split"/>
        </div>
        <div className="deposit-content">
          <div className="deposit-content-col">
            <h4>2</h4>
            <div className="col-rightbox">
              <p className="col-rightbox-text">
                <span> 在您的钱包付款或发款中，复制以下专门为您充值准备的⽐特币地址，在金额中填入您希望充值到账的数量，同时别忘记支付⼀定的矿⼯费以保证交易尽快被全网确认。您也可以在移动端钱包中扫描二维码来进⾏行支付。 您可以重复使用此⽐特币地址和二维码进⾏行充值。</span>
                <img src={require("../../../assets/image/wechat.png")} alt=""/>
              </p>
              <div className="col-rightbox-site">
                <div className="site">
                  <span>地址</span>
                  <span>18KaVbGxQ9GjYBydwjRAhbtrZCHzqxZhmz</span>
                  <span>12</span>
                  <span onClick={this.addAddress.bind(this)}><a href="javascript:;">生成新地址</a></span>
                </div>
                <p>在移动端钱包中扫描二维码来进行支付。</p>
              </div>
            </div>
          </div>
          <hr className="split"/>
        </div>
        <div className="deposit-content">
          <div className="deposit-content-col">
            <h4>3</h4>
            <p className="col-text">完成以上操作后点击发送付款，此交易将被广播到全网，您便可以这⾥查看到此笔交易的状态，当交易达到全网1个确认 (⼤约10⾄至60分钟) 时，系统将自动充值到账。您可以到资产公开中查询。</p>
          </div>
          <hr className="split"/>
        </div>
        <div className="deposit-history">
          <h2>历史记录</h2>
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
        {/* 美元 dollar*/}
        {/* <div className="dollarup">
          <p className="col-text">通过银行转账汇款的方式，经人工审核后充值人民币到您的交易账户中，流程如下：</p>
          <ul>
            <li>1. 提交以下表单，获得转账识别码；</li>
            <li>2. 银行转账汇款到云币交易所开户行，务必在备注栏填写识别码；</li>
            <li>3. 人工审核汇款记录，确认后充值到您的云币账户。</li>
          </ul>
          <span className="text-danger">特别提醒：充值银行账户姓名必须与您的实名认证姓名一致。</span>
          <div className="dollarup-form">
            <span className="linkman">汇款人</span>
            <div className="sam">
              <div className="sam-col">
                <label>开户户名</label>
                <b>张三</b>
              </div>
              <div className="sam-col">
                <label>充值账号（<a href="javascript:;" onClick={this.addAccount.bind(this)}>管理</a>）</label>
                <div>
                <Select style={{ width: '100%', marginTop:-10 }} onChange={this.handleChange1}>
                  
                </Select>
                </div>

              </div>
              <div className="sam-col">
                <label>充值金额</label>
                <InputNumber min={100}  style={{ width: '100%', marginTop:-10 }} onChange={this.onChangeVal} placeholder="最低金额100元"/>
              </div>
            </div>
            <span className="linkman">收款人</span>
            <div className="sam">
              <p className="sam-col">
                <label>收款账户</label>
                <b>吴斌</b>
              </p>
              <p className="sam-col">
                <label>收款账号</label>
                <b>6112 1281 8888 88888</b>
              </p>
              <p className="sam-col">
                <label><span>收款银行</span><span>开户行</span></label>
                <b><span>招商银行</span><span>北京双榆树支行</span></b>
              </p>
            </div>
          </div>
          <div className="form-cont">
            <button className="submit">提交</button>
          </div>
        </div> */}
        {/* 弹出框 */}
        <Dialog visible={visible} orClose={this.orClose}/>
        <CommonDialog visible={visible1} orClose={this.orClose1} onSure={this.onSure}>
          您确认要生成一个新的充值地址么？
        </CommonDialog>
        <div className="deposit-history">
          <h2>历史记录</h2>
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

export default Deposit