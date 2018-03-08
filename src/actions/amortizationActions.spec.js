import { addToBalance } from "./amortizationActions";
import { ADD_TO_BALANCE } from '../actions/constants';

describe('An Amortization Action', () => {
  it('converts amount to numeric', () => {
    const result =  addToBalance('10');

    expect(result).toEqual({type: ADD_TO_BALANCE, payload: 10});
    expect(result.payload).toEqual(10);
  }); 
});  