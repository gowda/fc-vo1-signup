import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import FormManager from './form-manager';

describe('FormManager', () => {
  describe('without props', () => {
    it('throws an exception', () => {
      expect(() => shallow(<FormManager />)).to.throw;
    });
  });

  describe('with props', () => {
    it('renders the component & button', () => {
      const buttonLabel = 'test button label';
      const component = (_props) => (<div>Test component</div>);
      const mockOnChange = jest.fn().mockImplementation((_value) => null);

      const wrapper = shallow(
        <FormManager
          component={component}
          value="test value"
          buttonLabel={buttonLabel}
          onChange={mockOnChange}
        />,
      );

      expect(wrapper.find(component)).to.have.lengthOf(1);

      const button = wrapper.find('button');
      expect(button).to.exist;
      expect(button.text()).to.have.string(buttonLabel);
    });

    describe('onChange', () => {
      const buttonLabel = 'test button label';
      const component = (_props) => (<div>Test component</div>);
      const mockOnChange = jest.fn().mockImplementation((_value) => null);
      let wrapper;

      beforeEach(() => {
        mockOnChange.mockClear();

        wrapper = shallow(
          <FormManager
            component={component}
            value="test value"
            buttonLabel={buttonLabel}
            onChange={mockOnChange}
          />,
        );

        wrapper.find('button').simulate('click', {});
      });

      it('is called with a value on button click', () => {
        expect(mockOnChange.mock.calls.length).to.eql(1);
        expect(mockOnChange.mock.calls[0][0]).to.exist;
        expect(mockOnChange.mock.calls[0][0]).to.be.string('test value');
      });
    });
  });
});
