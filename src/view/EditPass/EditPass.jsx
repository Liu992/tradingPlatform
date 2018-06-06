import React, { Component } from 'react';
import './EditPass.scss';

import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;


class EditPass extends Component {
  constructor (props) {
    super(props)
    this.state = {
      confirmDirty:''
    }
  }
  toBack () {
    let { history } = this.props;
    history.go(-1)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('收到表单的值: ', values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('您输入的两个密码不一致!');
    } else {
      callback();
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <div className="editpass">
        <div className="editpass-box">
          <div className="editpass-header">
            <h3>我的账户</h3>
          </div>
          <div className="editpass-details">
            <div className="editpass-left">
              <h4>修改密码</h4>
            </div>
            <div className="editpass-right">
            <Form onSubmit={this.handleSubmit}>
              <FormItem
                {...formItemLayout}
                label="旧密码"
              >
                <Input />
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="新密码"
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: '请输入你的密码!',
                  }, {
                    validator: this.validateToNextPassword,
                  }],
                })(
                  <Input type="password" placeholder="请设置新密码"/>
                )}
              </FormItem>
              <p>请输入至少6位密码, 建议包含大写、小写字母与数字。</p>
              <FormItem
                {...formItemLayout}
                label="确认密码"
              >
                {getFieldDecorator('confirm', {
                  rules: [{
                    required: true, message: '请再次输入您的密码!',
                  }, {
                    validator: this.compareToFirstPassword,
                  }],
                })(
                  <Input type="password" onBlur={this.handleConfirmBlur} placeholder="确认密码"/>
                )}
              </FormItem>
              <FormItem className="editpass-btn" {...tailFormItemLayout}>
                <Button type="primary" className="editpass-btn-cancel" onClick={this.toBack.bind(this)}>取消</Button>
                <Button type="primary" className="editpass-btn-sure" htmlType="submit">修改</Button>
              </FormItem>
            </Form>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

const WrappedRegistrationForm = Form.create()(EditPass);
export default WrappedRegistrationForm