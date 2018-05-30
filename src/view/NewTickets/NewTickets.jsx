import React, { Component } from 'react';
import './NewTickets.scss';
import { Input, Button } from 'antd';
const { TextArea } = Input;

class NewTickets extends Component {
  constructor (props) {
    super(props)
    this.toNewTickets = this.toNewTickets.bind(this)
  }
  toNewTickets () {
    this.props.history.push('/tickets/list')
  }
  render() {
    return (
      <div className="newtickets">
        <p>如果您有任何问题，意见或建议需要和我们沟通，请给我们简历一个服务单，我们会尽快回复您。</p>
          <div className="tickets-form">
            <label>
              <b>标题</b>
              <Input/>
            </label>
            <label>
              <b>详细描述</b>
              <TextArea rows={10} />
            </label>
            <div className="tickets-form-btn">
              <Button className="cancel" onClick={this.toNewTickets}>取消</Button>
              <Button onClick={this.toNewTickets} className="sub">提交</Button>
            </div>
          </div>
      </div>
    )
  }
}

export default NewTickets