import React, { Component } from 'react';
import './SmsAuth.scss';
import { Form, Input, Select, Button } from 'antd';

const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;

class SmsAuth extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nation: '',
      phone: '',
      verifycode: ''
    }
  }
  changeNation = (value) => {
    this.setState({
      nation: value
    })
  }
  changePhone = (e) => {
    this.setState({
      phone: e.target.value
    })
  }
  changeVerifyCode = (e) => {
    this.setState({
      verifycode: e.target.value
    })
  }
  handleSubmit = (e) => {
    let { nation, phone, verifycode } = this.state;
    console.log(nation, phone, verifycode)
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  toBack () {
    let { history } = this.props;
    history.go(-1)
  }
  render() {
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
      <div className="smsAuth">
        <div className="smsAuth-box">
          <div className="smsAuth-header">
            <h3>绑定手机号码</h3>
          </div>
          <div className="smsAuth-details">
            <div className="smsAuth-left">
              <h4><i className="fa fa-mobile fa-2x"></i>绑定手机号码</h4>
              <span>绑定手机号码，让您的资金更安全，还可以快速找回密码，并即时收到您在网站操作的动态提醒和监控账号安全。</span>
              <p>手机未绑定时，您将无法在网站操作提现以及账户密码找回。</p>
            </div>
            <div className="smsAuth-right">
              <div className="smsAuth-form">
              <Form onSubmit={this.handleSubmit}>
                {/* 国家 */}
                <FormItem
                    {...formItemLayout}
                    label={(
                      <b>
                        国家&nbsp;
                      </b>
                    )}
                  >
                    <Select defaultValue="China" style={{ width: "100%" }} onSelect={this.changeNation}>
                      <Option value="jack">Jack</Option>
                    </Select>
                  </FormItem>
                  {/* 地址 */}
                  <FormItem
                    {...formItemLayout}
                    label={(
                      <b>
                        手机号码&nbsp;
                      </b>
                    )}
                  >
                    <div className="getberify"><Input placeholder="请输入手机号码" onChange={this.changePhone}/><Button>获取验证码</Button></div>
                  </FormItem>
                  
                  {/* 验证码 */}
                  <FormItem
                    {...formItemLayout}
                    label={(
                      <b>
                        验证码&nbsp;
                      </b>
                    )}
                  >
                    <Input placeholder="请输入通过短信收到的六位验证码" onChange={this.changeVerifyCode}/>
                  </FormItem>
                  <FormItem className="smsAuth-btn" {...tailFormItemLayout}>
                    <Button type="primary" className="smsAuth-btn-cancel" onClick={this.toBack.bind(this)}>取消</Button>
                    <Button type="primary" className="smsAuth-btn-sure" htmlType="submit">绑定手机号码</Button>
                  </FormItem>
                </Form>                                
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

const WrappedRegistrationForm = Form.create()(SmsAuth);
export default WrappedRegistrationForm