import { ADD_TO_BALANCE } from '../actions/constants';

export const initState = { amount: 0 };

const amortizationReducer = (state = initState, action) => {
  if(action.type === ADD_TO_BALANCE) {
    // should always work, regardless of Java version
 //   return Object.assign(state, {amount: state.amount + action.payload});
    // ES6:
    return { ...state, amount: state.amount + action.payload };

  }
	return state;

};


export default amortizationReducer;