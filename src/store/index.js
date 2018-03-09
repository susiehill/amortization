import { createStore } from 'redux';
import amortizationReducer from '../reducers/amortizationReducer';

export default createStore(amortizationReducer)