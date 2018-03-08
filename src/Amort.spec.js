import React from 'react';
import { shallow } from 'enzyme';
import { Amort } from './Amort';

describe('An Amort component', () => {
  it('renders', () => {
    const component = shallow(<Amort />);
    expect(component.find('#amortRoot')).toHaveLength(1);
  }); 
});  