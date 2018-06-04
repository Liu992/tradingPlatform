import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header';
import Footer from './component/Footer';
import { Route } from 'react-router-dom';
import Property from './view/Property'
import Dcl from './view/DCL'
import ExchangeAssets from './view/ExchangeAssets'
import Historys from './view/History'
import Markets from './view/Markets'
import Settings from './view/Settings'
import Tickets from './view/Tickets'
import Signin from './view/Signin'
import Verify from './view/Verify'
import SmsAuth from './view/SmsAuth'
import GoogleAuth from './view/GoogleAuth'
import EditPass from './view/EditPass'
import ResetPassword from './view/ResetPassword'
import Signup from './view/Signup'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Route path="/" exact component={Dcl}/>
        <Route path="/funds" component={Property}/>
        <Route path="/markets" component={Markets}/>
        <Route path="/exchange_assets" component={ExchangeAssets}/>
        <Route path="/history" component={Historys}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/tickets" component={Tickets}/>
        {/* 设置页面 */}
        <Route path="/verify" component={Verify}/>
        <Route path="/smsauth" component={SmsAuth}/>
        <Route path="/googleauth" component={GoogleAuth}/>
        <Route path="/editpass" component={EditPass}/>
        {/* 登陆 */}
        <Route path="/signin" component={Signin}/>
        
        <Route path="/resetpassword" component={ResetPassword}/>
        <Route path="/signup" component={Signup}/>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
