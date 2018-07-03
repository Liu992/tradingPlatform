import React, { Component } from 'react';
import './Admin.scss';
import { Link } from 'react-router-dom';
import RouteInfo from '../../component/RouteInfo';

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adminlist: [
        {
          id: 1,
          path: '/admin/control',
          title: '控制面板'
        },
        {
          id: 2,
          path: '/admin/dom',
          title: '文档管理'
        },
        {
          id: 3,
          path: '/admin/identity',
          title: '身份验证'
        },
        {
          id: 4,
          path: '/admin/property',
          title: '资产证明'
        },
        {
          id: 5,
          title: '充值管理',
          children: [
            {
              id: '5_1',
              path: '/admin/recharge',
              title: '比特币充值'
            }
          ]
        },
        {
          id: 6,
          title: '提现管理',
          children: [
            {
              id: '6_1',
              path: '/admin/withdraw',
              title: '比特币提现'
            }
          ]
        },
        {
          id: 7,
          path: '/admin/user',
          title: '用户管理'
        },
        {
          id: 8,
          path: '/admin/servics',
          title: '服务单管理'
        },
        {
          id: 9,
          title: '数据统计',
          children: [
            {
              id: '9_1',
              path: '/admin/statistics',
              title: 'Member'
            }
          ]
        }
      ],
      defaultActive: 1
    }
  }
  changeActive (id) {
    this.setState({
      defaultActive: id
    })
  }
  render() {
    let { adminlist, defaultActive } = this.state;
    let { route } = this.props
    return (
      <div className="admin">
        <div className="admin-header">
          <nav className="admin-nav">
            <ul>
              {
                adminlist.map((item) => {
                  return (
                    !!item.children ? <li key={item.id} className={`${defaultActive === item.id?'active':''}`} onClick={this.changeActive.bind(this, item.id)}>
                      {item.title}<i/>
                      {
                        item.children.map((item1) => {
                          return <span key={item1.id}><Link to={item1.path}>{item1.title}</Link></span>
                        })
                      }
                    </li> :
                      <li key={item.id} className={`${defaultActive === item.id?'active':''}`} onClick={this.changeActive.bind(this, item.id)}>
                        <Link to={item.path}>{item.title}</Link>
                      </li>
                  )
                })
              }
            </ul>
            <ol>
              <li>
                返回
            </li>
            </ol>
          </nav>
        </div>
        <div className="admin-content">
          <RouteInfo routes={route} />
        </div>
      </div>
    )
  }
}

export default Admin