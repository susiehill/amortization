import { addToBalance } from '../actions/amortizationActions';
import amortizationReducer, { initState } from './amortizationReducer';
import { ADD_TO_BALANCE } from '../actions/constants';

describe('Amortization Reducer', () => {
  it('defaults amount to zero', () => {
    const result = amortizationReducer(undefined, {type: 'whatever'});

    expect(result.amount).toEqual(0);
  }); 

  it('Adds to Balance', () => {
    const result = amortizationReducer(initState, addToBalance('10'));

    expect(result.amount).toEqual(10);
  });

  it('does not stomp on existing state data', () => {
    const result = amortizationReducer({ amount: 2000, apr: 5 }, addToBalance(20));

    expect(result.apr).toEqual(5);
  });
  
});