import React, { Component } from 'react';
import './Verify.scss';
import { Form, Input, Select, Button } from 'antd';

const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;

let years = [];
for (let i = 1948; i <= 2006; i++) {
  years.push(i)
}
let months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
let days = [];
for (let i = 1; i <= 31; i++) {
  days.push(i)
}

class Verify extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmDirty: false,
      name: '',
      year: '1948',
      month: '五月',
      day: '31',
      address: '',
      city: '',
      nation: '',
      postcode: '',
      paperstype: '请选择',
      papersphone: '',
      papersphoto: '',
      billtype: '请选择',
      billphoto: ''
    }

  }
  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  changeDay = (value) => {
    this.setState({
      day: value
    })
  }
  changeMonth = (value) => {
    this.setState({
      month: value
    })
  }
  changeYear = (value) => {
    this.setState({
      year: value
    })
  }
  changeAddress = (e) => {
    this.setState({
      address: e.target.value
    })
  }
  changeCity = (e) => {
    this.setState({
      city: e.target.value
    })
  }
  changeNation = (value) => {
    this.setState({
      nation: value
    })
  }
  changePostcode = (e) => {
    this.setState({
      postcode: e.target.value
    })
  }
  changePaperstype = (value) => {
    this.setState({
      paperstype: value
    })
  }
  changePapersphone = (e) => {
    this.setState({
      papersphone: e.target.value
    })
  }
  changePapersphoto = (e) => {
    this.setState({
      papersphoto: e.target.value
    })
  }
  changeBilltype = (value) => {
    this.setState({
      billtype: value
    })
  }
  changeBillphoto = (e) => {
    this.setState({
      billphoto: e.target.value
    })
  }
  handleSubmit = (e) => {
    let { name, year, month, day, address, city, nation, postcode, paperstype, papersphone, papersphoto, billtype, billphoto } = this.state;
    console.log(name, year, month, day, address, city, nation, postcode, paperstype, papersphone, papersphoto, billtype, billphoto)
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
    const { getFieldDecorator } = this.props.form;
    let { name, year, month, day, address, city, nation, postcode, paperstype, papersphone, papersphoto, billtype, billphoto } = this.state;
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
      <div className="verify">
        <div className="verify-box">
          <div className="verify-header">
            <h3>实名认证</h3>
          </div>
          <div className="verify-details">
            <div className="verify-left">
              <h4>实名认证</h4>
              <p>Warning</p>
            </div>
            <div className="verify-right">
              <h1>验证状态 未验证</h1>
              <div className="verify-form">
                <Form onSubmit={this.handleSubmit}>
                  {/* 姓名 */}
                  <FormItem
                    {...formItemLayout}
                    label={(
                      <b>
                        真实姓名&nbsp;
                    </b>
                    )}
                  >
                    {getFieldDecorator('name', {
                      rules: [{ required: true, message: '不能为空字符!', whitespace: true }],
                    })(
                      <Input onChange={this.changeName}/>
                    )}
                  </FormItem>
                  <span className="label">请填写与您证件上一直的姓名。</span>
                  {/* 生日 */}
                  <FormItem
                    {...formItemLayout}
                    label={(
                      <b>
                        生日&nbsp;
                      </b>
                    )}
                  >
                    <Select defaultValue="31" style={{ width: 120 }} onChange={this.changeDay}>
                      <Option value="jack">Jack</Option>
                    </Select>
                    <Select defaultValue="五月" style={{ width: 120 }} onChange={this.changeMonth}>
                      <Option value="jack">Jack</Option>
                    </Select>
                    <Select defaultValue="1948" style={{ width: 120 }} onChange={this.changeYear}>
                      <Option value="jack">Jack</Option>
                    </Select>
                  </FormItem>
                  {/* 地址 */}
                  <FormItem
                    {...formItemLayout}
                    label={(
                      <b>
                        地址&nbsp;
                      </b>
                    )}
                  >
                    <TextArea rows={3} onChange={this.changeAddress}/>
                  </FormItem>
                  {/* 城市 */}
                  <FormItem
                    {...formItemLayout}
                    label={(
                      <b>
                        城市&nbsp;
                      </b>
                    )}
                  >
                    <Input onChange={this.changeCity}/>
                  </FormItem>
                  {/* 国家 */}
                  <FormItem
                    {...formItemLayout}
                    label={(
                      <b>
                        国家&nbsp;
                      </b>
                    )}
                  >
                    <Select style={{ width: "100%" }} onSelect={this.changeNation}>
                      <Option value="jack">Jack</Option>
                    </Select>
                  </FormItem>
                  {/* 邮编 */}
                  <FormItem
                    {...formItemLayout}
                    label={(
                      <b>
                        邮编&nbsp;
                      </b>
                    )}
                  >
                    <Input onChange={this.changePostcode}/>
                  </FormItem>
                  {/* 证件类型 */}
                  <FormItem
                    {...formItemLayout}
                    label={(
                      <b>
                        证件类型&nbsp;
                    </b>
                    )}
                  >
                    {getFieldDecorator('paperstype', {
                      rules: [{ required: true, message: '不能为空字符!', whitespace: true }],
                    })(
                      <Select initialValue="请选择" style={{ width: "100%" }} onSelect={this.changePaperstype}>
                        <Option value="jack">Jack</Option>
                      </Select>
                    )}
                  </FormItem>
                  {/* 证件号码 */}
                  <FormItem
                    {...formItemLayout}
                    label={(
                      <b>
                        证件号码&nbsp;
                    </b>
                    )}
                  >
                    {getFieldDecorator('papersphone', {
                      rules: [{ required: true, message: '不能为空字符!', whitespace: true }],
                    })(
                      <Input onChange={this.changePapersphone}/>
                    )}
                  </FormItem>
                  {/* 证件照片 */}
                  <FormItem
                    {...formItemLayout}
                    label={(
                      <b>
                        证件照片&nbsp;
                    </b>
                    )}
                  >
                    <label className="files" htmlFor="papersphoto"><input id="papersphoto" type="file" onChange={this.changePapersphoto}/></label>
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label={(
                      <b>
                        账单类型&nbsp;
                    </b>
                    )}
                  >
                    {getFieldDecorator('billtype', {
                      rules: [{ required: true, message: '不能为空字符!', whitespace: true }],
                    })(
                      <Select initialValue="请选择" style={{ width: "100%" }} onSelect={this.changeBilltype}>
                        <Option value="jack">Jack</Option>
                      </Select>
                    )}
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label={(
                      <b>
                        账单照片&nbsp;
                    </b>
                    )}
                  >
                    <label className="files" htmlFor="billphoto"><input id="billphoto" type="file" onChange={this.changeBillphoto}/></label>
                  </FormItem>
                  <FormItem className="verify-btn" {...tailFormItemLayout}>
                    <Button type="primary" className="verify-btn-cancel" onClick={this.toBack.bind(this)}>取消</Button>
                    <Button type="primary" className="verify-btn-sure" htmlType="submit">更新实名认证</Button>
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
const WrappedRegistrationForm = Form.create()(Verify);
export default WrappedRegistrationForm