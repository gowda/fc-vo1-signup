import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SalaryIndicatorOption from './salary-indicator-option';

describe('SalaryIndicatorOption', () => {
  describe('without props', () => {
    it('throws an exception', () => {
      expect(() => shallow(<SalaryIndicatorOption />)).to.throw;
    });
  });

  describe('with props', () => {
    it('renders the label from props', () => {
      const wrapper = shallow(
        <SalaryIndicatorOption
          label="test label"
          onChange={() => null}
        />,
      );
      expect(wrapper.text()).to.have.string('test label');
    });
  });

  describe('onChange', () => {
    const mockOnChange = jest.fn().mockImplementation((_name) => null);
    let wrapper;

    beforeEach(() => {
      mockOnChange.mockClear();

      wrapper = shallow(
        <SalaryIndicatorOption
          label="test label"
          onChange={() => null}
        />,
      );
      wrapper.find('input').simulate('click', {});
    });

    it('gets called', () => {
      expect(wrapper.text()).to.have.string('test label');
    });
  });
});
