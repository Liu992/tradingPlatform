import React, { Component } from 'react';
import './PropertyList.scss';
import { connect } from 'react-redux';
import propertydetailAction from '../../store/action/propertydetail.js';
let data = [
  1, 2, 3, 4
]

@connect()
class PropertyList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 0,
      tit: 'deposit'
    }
  }
  changePage (type, index) {
    const { dispatch } = this.props;
    dispatch(propertydetailAction(type))
    this.setState({
      active: index,
      tit: type
    })
  }
  render () {
    let { active, tit } = this.state;
    return (
      <div className="propperty-list">
        {
          data.map((item, index) => {
            return (
              <div className={`item-list ${active === index?'item-list-active':''}`} key={index}>
                <div className="logo">
                  <img src={require("../../assets/image/Oval.png")} alt=""/>
                  <span>BTC</span>
                </div>
                <div className="money">
                  <p>0.000000</p>
                  <span><i className="fa fa-lock"></i>0.0</span>
                </div>
                <div className="action">
                  <a href="javascript:;" className={`deposit ${tit === 'deposit'&&active===index?'after':''}`} onClick={this.changePage.bind(this, 'deposit', index)}>充值</a>
                  <a href="javascript:;" className={`withdraw ${tit === 'withdraw'&&active===index?'after':''}`} onClick={this.changePage.bind(this, 'withdraw', index)}>提现</a>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default PropertyList