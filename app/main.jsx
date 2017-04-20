import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import RootRouters from './routes/RootRouter'

import {browserHistory} from 'react-router';

import configureStore from './stores';
import './main.less';
const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <RootRouters history={browserHistory}/>
   </Provider>,
    document.getElementById('root')
);
