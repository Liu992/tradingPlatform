import React, { Component } from 'react';
import './EditPass.scss';

class EditPass extends Component {
  constructor (props) {
    super(props)
  }
  render() {
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
              
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default EditPass