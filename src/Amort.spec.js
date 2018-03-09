import React from 'react';
import { createMockStore } from 'redux-test-utils';
import { mount, shallow } from 'enzyme';
import { FormControl } from 'react-bootstrap';
import Amort from './Amort';
import store from './store';


describe('An Amort component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Amort store={store} />);
  });

  xit('renders', () => {
    expect(component.find('#amortRoot')).toHaveLength(1);
  });

  xit('updates amount when add to loan clicked', () => {
    const addAmount = component.ref('addAmount').simulate('change', {target: {value: 10}});

    const button = component.find('#addBtn');
    const click = button.simulate('click');

    expect(component.find('#loanAmount').text()).toEqual('10');
  });

  it('has an initial prop for amount', () => {
    expect(component.dive().instance().props.amount).toEqual(0);
  });

  it('updates add amount onChange event', () => {
    const componentAmortInstance = component.dive().instance();
    componentAmortInstance.updateAddToLoanAmount({target: {value: 10}});

    expect(componentAmortInstance.state.addAmount).toEqual(10);
  });

  it('adds addAmount to amount', () => {
    component.dive().instance().props.addToBalance(15);

    expect(component.dive().instance().props.amount).toEqual(15);
  });

});