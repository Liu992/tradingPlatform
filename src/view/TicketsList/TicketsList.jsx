import React, { Component } from 'react';
import './TicketsList.scss';

class TicketsList extends Component {
  constructor (props) {
    super(props)
    this.toNewTickets = this.toNewTickets.bind(this)
  }
  toNewTickets () {
    this.props.history.push('/tickets/new')
  }
  render() {
    return (
      <div className="ticketsList">
        <button className="newticket" onClick={this.toNewTickets}>新建服务单</button>
        <h5>查看已结束的服务单</h5>
      </div>
    )
  }
}

export default TicketsList