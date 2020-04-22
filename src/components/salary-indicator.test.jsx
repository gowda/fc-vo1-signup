import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SalaryIndicator from './salary-indicator';
import SalaryIndicatorOption from './salary-indicator-option';

describe('SalaryIndicator', () => {
  describe('without props', () => {
    it('throws an exception', () => {
      expect(() => shallow(<SalaryIndicator />)).to.throw;
    });
  });

  describe('with props', () => {
    it('renders the radio button for each option', () => {
      const wrapper = shallow(
        <SalaryIndicator value="" onChange={() => null} />,
      );

      expect(wrapper.find(SalaryIndicatorOption)).to.have.lengthOf(5);
    });

    it('renders the radio button checked if value matches', () => {
      const wrapper = shallow(
        <SalaryIndicator value="More than 4.000" onChange={() => null} />,
      );

      const checkedOption = wrapper.find(SalaryIndicatorOption)
        .findWhere((n) => n.props().checked === true);

      expect(checkedOption.props().label).to.be.string('More than 4.000');
    });
  });

  describe('onChange', () => {
    const mockOnChange = jest.fn().mockImplementation((_name) => null);
    let wrapper;
    const testOption = 'More than 4.000';

    beforeEach(() => {
      mockOnChange.mockClear();

      wrapper = shallow(
        <SalaryIndicator
          value=""
          onChange={mockOnChange}
        />,
      );

      wrapper.find(SalaryIndicatorOption)
        .forEach((node) => {
          if (node.props().label === testOption) {
            node.simulate('change', { target: { checked: true } });
          }
        });
    });

    it('gets called with the right parameter', () => {
      expect(mockOnChange.mock.calls).to.have.lengthOf(1);
      expect(mockOnChange.mock.calls[0][0]).to.be.string(testOption);
    });
  });
});
