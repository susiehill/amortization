import React from 'react';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import Amort from './Amort';

describe('An Amort component', () => {
  const component = shallowWithStore(<Amort />, createMockStore({amount: 0}));
  it('renders', () => {
    expect(component.find('#amortRoot')).toHaveLength(1);
  });

  it('updates amount when add to loan clicked', () => {
    const addAmount = component.find('#addAmount');
    addAmount.simulate('change', {target: {value: 10}});

    const button = component.find('#addBtn');
    const click = button.simulate('click');

    expect(component.find('#loanAmount').text()).toEqual('10');
  });


});