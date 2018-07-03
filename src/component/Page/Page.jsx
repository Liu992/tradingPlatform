import React, { Component } from 'react';
import './Page.scss';

class Page extends Component {
  constructor (props) {
    super(props)
  }
  changePage (num) {
    this.props.atnum(num)
  }
  render() {
    let {pagination, allpagenum, pagenum} = this.props;
    let onlypage = [];
    let len = Math.ceil(allpagenum/pagenum)
    for (let i = 1; i <= len; i++) {
      onlypage.push(i)
    }
    return (
      <div className="page">
        <ul className="pagination">
          <li className="previous disabled">
            <span>&lt;&lt;</span>
          </li>
          <li className="previous disabled">
            <span>上一页</span>
          </li>
          
            {
              onlypage.map((item, ind) => {
                return <li key={ind} onClick={this.changePage.bind(this, item)} className={`page ${pagination===(ind+1)?'active':''}`}><span>{item}</span></li>
              })
            }
          <li className="next">
            <span>下一页</span>
          </li>
          <li className="next disabled">
            <span>&gt;&gt;</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default Page