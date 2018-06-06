import React, { Component } from 'react';
import './Tickets.scss';
import NewTickets from '../NewTickets';
import TicketsList from '../TicketsList'
import { Route } from 'react-router-dom'

class Tickets extends Component {
  constructor (props) {
    super(props)
    this.toNewTickets = this.toNewTickets.bind(this)
  }
  toNewTickets () {
    this.props.history.push('/tickets/new')
  }
  render() {
    return (
      <div className="tickets">
        <div className="tickets-box">
          <div className="tickets-header">
            <h3>服务单</h3>
          </div>
          <div className="tickets-details">
            <div className="tickets-left">
              <h4>服务单</h4>
            </div>
            <Route path="/index/tickets/list" component={TicketsList}/>
            <Route path="/index/tickets/new" component={NewTickets}/>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Tickets