import Loadable from 'react-loadable';
import React from 'react';

function MyLoadingComponent() {
  return <div>Loading...</div>;
}

let Property = Loadable({
  loader: () => import('../view/Property/Property'),
  loading: MyLoadingComponent
});
let Dcl = Loadable({
  loader: () => import('../view/DCL'),
  loading: MyLoadingComponent
});
let ExchangeAssets = Loadable({
  loader: () => import('../view/ExchangeAssets'),
  loading: MyLoadingComponent
});
let Historys = Loadable({
  loader: () => import('../view/History'),
  loading: MyLoadingComponent
});
let Markets = Loadable({
  loader: () => import('../view/Markets'),
  loading: MyLoadingComponent
});
let Settings = Loadable({
  loader: () => import('../view/Settings'),
  loading: MyLoadingComponent
});
let Tickets = Loadable({
  loader: () => import('../view/Tickets'),
  loading: MyLoadingComponent
});
let Signin = Loadable({
  loader: () => import('../view/Signin'),
  loading: MyLoadingComponent
});
let Verify = Loadable({
  loader: () => import('../view/Verify'),
  loading: MyLoadingComponent
});
let SmsAuth = Loadable({
  loader: () => import('../view/SmsAuth'),
  loading: MyLoadingComponent
});
let GoogleAuth = Loadable({
  loader: () => import('../view/GoogleAuth'),
  loading: MyLoadingComponent
});
let EditPass = Loadable({
  loader: () => import('../view/EditPass'),
  loading: MyLoadingComponent
});
let ResetPassword = Loadable({
  loader: () => import('../view/ResetPassword'),
  loading: MyLoadingComponent
});
let Signup = Loadable({
  loader: () => import('../view/Signup'),
  loading: MyLoadingComponent
});
let ApiToken = Loadable({
  loader: () => import('../view/ApiToken'),
  loading: MyLoadingComponent
});

let DclIndex = Loadable({
  loader: () => import('../view/DclIndex'),
  loading: MyLoadingComponent
});

let HttpApi = Loadable({
  loader: () => import('../view/HttpApi'),
  loading: MyLoadingComponent
});

let WebsocketApi = Loadable({
  loader: () => import('../view/WebsocketApi'),
  loading: MyLoadingComponent
});
let Api = Loadable({
  loader: () => import('../view/Api'),
  loading: MyLoadingComponent
});
let Orders = Loadable({
  loader: () => import('../view/History/Orders'),
  loading: MyLoadingComponent
})
let Account = Loadable({
  loader: () => import('../view/History/Account'),
  loading: MyLoadingComponent
})
let Trades = Loadable({
  loader: () => import('../view/History/Trades'),
  loading: MyLoadingComponent
})
let Admin = Loadable({
  loader: () => import('../view/Admin'),
  loading: MyLoadingComponent
})
let Control = Loadable({
  loader: () => import('../view/Admin/Control'),
  loading: MyLoadingComponent
})
let Dom = Loadable({
  loader: () => import('../view/Admin/Dom'),
  loading: MyLoadingComponent
})
let Identity = Loadable({
  loader: () => import('../view/Admin/Identity'),
  loading: MyLoadingComponent
})
let AProperty = Loadable({
  loader: () => import('../view/Admin/Property'),
  loading: MyLoadingComponent
})
let Recharge = Loadable({
  loader: () => import('../view/Admin/Recharge'),
  loading: MyLoadingComponent
})
let Servics = Loadable({
  loader: () => import('../view/Admin/Service'),
  loading: MyLoadingComponent
})
let Statistics = Loadable({
  loader: () => import('../view/Admin/Statistics'),
  loading: MyLoadingComponent
})
let User = Loadable({
  loader: () => import('../view/Admin/User'),
  loading: MyLoadingComponent
})
let Withdraw = Loadable({
  loader: () => import('../view/Admin/Withdraw'),
  loading: MyLoadingComponent
})
let NewDom = Loadable({
  loader: () => import('../view/Admin/Dom/NewDom'),
  loading: MyLoadingComponent
})



let routerMap = [
  {
    path: '/',
    exact: true
  },
  {
    path: '/index',
    exact: false,
    component: Dcl,
    children: [
      {
        path: '/index/dcl',
        exact: false,
        component: DclIndex
      },
      {
        path: '/index/exchange_assets',
        exact: false,
        component: ExchangeAssets
      },
      {
        path: '/index/funds',
        exact: false,
        component: Property
      },
      {
        path: '/index/history',
        exact: false,
        component: Historys,
        children: [
          {
            path: '/index/history/orders',
            exact: false,
            component: Orders
          },
          {
            path: '/index/history/account',
            exact: false,
            component: Account
          },
          {
            path: '/index/history/trades',
            exact: false,
            component: Trades
          }
        ]
      },
      {
        path: '/index/settings',
        exact: false,
        component: Settings
      },
      {
        path: '/index/tickets',
        exact: false,
        component: Tickets
      },
      {
        path: '/index/verify',
        exact: false,
        component: Verify
      },
      {
        path: '/index/SmsAuth',
        exact: false,
        component: SmsAuth
      },
      {
        path: '/index/googleauth',
        exact: false,
        component: GoogleAuth
      },
      {
        path: '/index/editpass',
        exact: false,
        component: EditPass
      },
      {
        path: '/index/apitoken',
        exact: false,
        component: ApiToken
      },
      {
        path: '/index/signin',
        exact: false,
        component: Signin
      },
      {
        path: '/index/resetpassword',
        exact: false,
        component: ResetPassword
      },
      {
        path: '/index/signup',
        exact: false,
        component: Signup
      }
    ]
  },
  {
    path: '/markets',
    exact: true,
    component: Markets
  },
  {
    path: '/admin',
    exact: false,
    component: Admin,
    children: [
      {
        path: '/admin/control',
        exact: false,
        component: Control
      },
      {
        path: '/admin/dom',
        exact: false,
        component: Dom
      },
      {
        path: '/admin/identity',
        exact: false,
        component: Identity
      },
      {
        path: '/admin/property',
        exact: false,
        component: AProperty
      },
      {
        path: '/admin/recharge',
        exact: false,
        component: Recharge
      },
      {
        path: '/admin/withdraw',
        exact: false,
        component: Withdraw
      },
      {
        path: '/admin/user',
        exact: false,
        component: User
      },
      {
        path: '/admin/servics',
        exact: false,
        component: Servics
      },
      {
        path: '/admin/statistics',
        exact: false,
        component: Statistics
      },
      {
        path: '/admin/newdom',
        exact: false,
        component: NewDom
      }
    ]
  },
  {
    path: '/api',
    exact: false,
    component: Api,
    children: [
      {
        path: '/api/httpapi',
        exact: false,
        component: HttpApi
      },
      {
        path: '/api/websocketapi',
        exact: false,
        component: WebsocketApi
      }
    ]
  }
]

export default routerMap