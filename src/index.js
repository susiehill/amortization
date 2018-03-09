import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Amort from './Amort';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

//TODO: change to use a root reducer

const Root = () => (
  <Provider store={store}>
    <Amort />
  </Provider>
)

ReactDOM.render(Root(), document.getElementById('root'));
registerServiceWorker();
