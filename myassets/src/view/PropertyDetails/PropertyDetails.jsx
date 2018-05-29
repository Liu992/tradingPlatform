import React, { Component } from 'react';
import './PropertyDetails.scss';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    active: state.Propertydetail.active
  }
}
@connect(mapStateToProps)
class PropertyDetails extends Component {
  render () {
    let { active } = this.props
    return (
      <div className="property-details">
        {
          active!==''&&active==='deposit'?<Deposit/>:<Withdraw/>
        }
      </div>
    )
  }
}

export default PropertyDetails