import React, { Component } from 'react';
import './Signup.scss';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;


class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
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
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

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
      <div className="signup">
        <div className="signup-box">
          <div className="signup-header">
            <h3>创建账户</h3>
          </div>
          <div className="signup-details">
            <div className="signup-left">
              <h4>创建我的账户</h4>
              <p>这将是您的各项服务所需要的用户名，例如交易购买、转账、提币、提现等，为了您的账户安全，尽量避免不安全的因素，请您填写完整。</p>
              <NavLink to="/signin">
                立即登录
              </NavLink>
            </div>
            <div className="signup-right">
            <Form onSubmit={this.handleSubmit}>
              <FormItem
                {...formItemLayout}
                label="登录邮箱"
              >
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: '输入不是有效的电子邮件!',
                  }, {
                    required: true, message: '请输入你的电子邮件!',
                  }],
                })(
                  <Input placeholder="例如：xiaobai@example.com"/>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="新密码"
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: '请输入您的密码!',
                  }, {
                    validator: this.validateToNextPassword,
                  }],
                })(
                  <Input type="password" placeholder="请设置登录密码"/>
                )}
              </FormItem>
              <p className="passtip">请输入至少6位密码，建议包含大写、小写字母与数字。</p>
              <FormItem
                {...formItemLayout}
                label="确认密码"
              >
                {getFieldDecorator('confirm', {
                  rules: [{
                    required: true, message: '请确认您的密码!',
                  }, {
                    validator: this.compareToFirstPassword,
                  }],
                })(
                  <Input type="password" onBlur={this.handleConfirmBlur} placeholder="确认密码"/>
                )}
              </FormItem>
              
              <FormItem className="signup-btn" {...tailFormItemLayout}>
                  <Button type="primary" className="signup-btn-cancel" onClick={this.toBack.bind(this)}>取消</Button>
                  <Button type="primary" className="signup-btn-sure" htmlType="submit">创建账户</Button>
                </FormItem>
            </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const WrappedRegistrationForm = Form.create()(Signup);
export default WrappedRegistrationForm