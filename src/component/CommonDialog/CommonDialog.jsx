import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import './CommonDialog.scss';

class CommonDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    this.Verify = this.Verify.bind(this)
  }
  // 关闭弹出框
  closeDialog = () => {
    let { orClose } = this.props
    orClose(false)
  }
  // 点击弹窗确认按钮
  Verify () {
    this.closeDialog()
    this.props.onSure('ok')
  }
  // 弹出框显示
  componentWillReceiveProps (newprops) {
    this.setState({
      visible: newprops.visible,
    });
  }
  render() {
    let { visible } = this.state;
    let { children } = this.props;
    return (
      <div className="dialog" style={{ display: visible?'block':'none'}}>
        <div className="dialog-box">
          <b className="dialog-close" onClick={this.closeDialog}><Icon type="close" style={{ fontSize: 20, color: '#999' }} /></b>
          <h3>{children}</h3>
          <div className="dialog-btn">
            <Button className="cancel" onClick={this.closeDialog}>取消</Button>
            <Button onClick={this.Verify} className="sub">提交</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default CommonDialog;