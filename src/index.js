import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/common.css';
import 'antd/dist/antd.css';
import './assets/css/font-awesome.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
