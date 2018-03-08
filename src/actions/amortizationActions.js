import { ADD_TO_BALANCE } from '../actions/constants';

export const addToBalance = (amountToAdd) => {
  return {type: ADD_TO_BALANCE, payload: parseInt(amountToAdd, 10)};
};
