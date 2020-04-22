import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SalaryIndicatorOption from './salary-indicator-option';

describe('SalaryIndicatorOption', () => {
  describe('without props', () => {
    it('renders a blank div', () => {
      expect(() => shallow(<SalaryIndicatorOption />)).to.throw;
    });
  });

  describe('with props', () => {
    it('renders the label from props', () => {
      const wrapper = shallow(<SalaryIndicatorOption label="test label" />);
      expect(wrapper.text()).to.have.string('test label');
    });
  });
});
