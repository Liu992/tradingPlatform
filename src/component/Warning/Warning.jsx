import React, { Component } from 'react';
import './Warning.scss';
import {Alert} from 'antd';

class Warning extends Component {
  constructor (props) {
    super(props)
    let { visible, title, mold } = this.props;
    this.state = {
      visible: visible,
      title: title,
      mold: mold
    }
  }
  onClose (e) {
    this.props.close(false)
  }
  render() {
    let { visible, title, mold, hei } = this.state;
    return (
        <Alert 
        type={mold} 
        style={{display: visible?'block':'none'}}
        message={title}
        closable
        onClose={this.onClose.bind(this)}/>
    )
  }
}

export default Warning