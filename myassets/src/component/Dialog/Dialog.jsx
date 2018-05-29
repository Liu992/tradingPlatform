import React, { Component } from 'react';
import { Icon, Input, Select, Button } from 'antd';
import './Dialog.scss';
const Option = Select.Option;

class Dialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  // 关闭弹出框
  closeDialog = () => {
    let { orClose } = this.props
    orClose(false)
  }
  // 银行下拉列表
  handleChange1(value) {
    console.log(`selected ${value}`);
  }
  // 弹出框显示
  componentWillReceiveProps (newprops) {
    console.log(newprops)
    this.setState({
      visible: newprops.visible,
    });
  }
  render() {
    let { visible } = this.state;
    return (
      <div className="dialog" style={{ display: visible?'block':'none'}}>
        <div className="dialog-box">
          <b className="dialog-close" onClick={this.closeDialog}><Icon type="close" style={{ fontSize: 20, color: '#999' }} /></b>
          <h2>银行账号管理</h2>
          <p><strong>通过增加提现银行账号，以便每次提现时快速选择。</strong></p>
          <table>
            <thead>
              <tr>
                <th>银行</th>
                <th>银行账号</th>
                <th>默认</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Select defaultValue="1" style={{ width: "100%" }} onChange={this.handleChange1}>
                    <Option value="1">工商银行</Option>
                    <Option value="2">建设银行</Option>
                    <Option value="3">中国银行</Option>
                    <Option value="4">交通银行</Option>
                    <Option value="5">农业银行</Option>
                    <Option value="6">招商银行</Option>
                    <Option value="7">民生银行</Option>
                    <Option value="8">中信银行</Option>
                    <Option value="9">华夏银行</Option>
                    <Option value="10">兴业银行</Option>
                    <Option value="11">浦东发展银行</Option>
                    <Option value="12">北京银行</Option>
                    <Option value="13">光大银行</Option>
                    <Option value="14">深圳发展银行</Option>
                    <Option value="15">平安银行</Option>
                    <Option value="16">广东发展银行</Option>
                  </Select>
                </td>
                <td>
                  <Input placeholder="Basic usage" style={{ width: "100%" }} placeholder="银行账号"/>
                </td>
                <td>
                  <Button>添加</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Dialog;