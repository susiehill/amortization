import React from 'react';
import { shallowWithStore, mountWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import { shallow, mount } from 'enzyme';
import { FormControl } from 'react-bootstrap';
import Amort from './Amort';

const store = createMockStore({amount: 0});
describe('An Amort component', () => {
  //const component = shallowWithStore(<Amort />, createMockStore({amount: 0}));
  const component = mount(<Amort store={store} />);
  it('renders', () => {
    expect(component.find('#amortRoot')).toHaveLength(1);
  });

  it('updates amount when add to loan clicked', () => {
    const addAmount = component.find(FormControl).get(0);
    console.log(addAmount);
    addAmount.simulate('change', {target: {value: 10}});

    const button = component.find('#addBtn');
    const click = button.simulate('click');

    expect(component.find('#loanAmount').text()).toEqual('10');
  });


});