import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Amort from './Amort';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import amortizationReducer from './reducers/amortizationReducer';
import {Provider} from 'react-redux';

//TODO: change to use a root reducer
console.log('setting up store');
const Root = () => {
  return <Provider store={createStore(amortizationReducer)}><Amort /></Provider>
}
ReactDOM.render(Root(), document.getElementById('root'));
registerServiceWorker();
