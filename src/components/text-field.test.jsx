import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import TextField from './text-field';

describe('TextField', () => {
  describe('without props', () => {
    it('renders a blank div', () => {
      expect(() => shallow(<TextField />)).to.throw;
    });
  });

  describe('with only required props', () => {
    it('renders the label from props with other defaults', () => {
      const wrapper = shallow(<TextField label="test label" />);

      const label = wrapper.find('label');
      expect(label).to.exist;
      expect(label.text()).to.have.string('test label');

      const input = wrapper.find('input');
      expect(input).to.exist;
      expect(input.props().placeholder).to.be.string('Enter your input');

      expect(wrapper.contains('small')).to.be.false;
    });
  });

  describe('with props', () => {
    it('renders using values from props', () => {
      const labelText = 'test label';
      const placeholderText = 'test placeholder';
      const helpText = 'test help text';

      const wrapper = shallow(
        <TextField
          label={labelText}
          placeholder={placeholderText}
          helpText={helpText}
        />,
      );

      const label = wrapper.find('label');
      expect(label).to.exist;
      expect(label.text()).to.have.string(labelText);

      const input = wrapper.find('input');
      expect(input).to.exist;
      expect(input.props().placeholder).to.be.string(placeholderText);

      const help = wrapper.find('small');
      expect(help).to.exist;
      expect(help.text()).to.be.string(helpText);
    });
  });

  describe('validator', () => {
    describe('default validator', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(
          <TextField label="test label" />,
        );
        wrapper.find('input').simulate('change', { target: { value: 'test input' } });
      });

      it('does not show error message', () => {
        expect(wrapper.contains('small.test_label-error')).to.be.false;
      });
    });

    describe('from props', () => {
      const mockValidator = jest.fn().mockImplementation((_name) => null);
      const testInput = 'test input';

      beforeEach(() => {
        mockValidator.mockClear();

        const wrapper = shallow(
          <TextField label="test label" validator={mockValidator} />,
        );
        wrapper.find('input').simulate('change', { target: { value: testInput } });
      });

      it('gets called with changed text from input', () => {
        expect(mockValidator.mock.calls.length).to.eql(1);
        expect(mockValidator.mock.calls[0][0]).to.eql(testInput);
      });
    });

    describe('when returns null', () => {
      const mockValidator = jest.fn().mockImplementation((_name) => null);
      const testInput = 'test input';
      let wrapper;

      beforeEach(() => {
        mockValidator.mockClear();

        wrapper = shallow(
          <TextField label="test label" validator={mockValidator} />,
        );
        wrapper.find('input').simulate('change', { target: { value: testInput } });
      });

      it('does not show error', () => {
        expect(wrapper.contains('small#test_label-error')).to.be.false;
      });
    });

    describe('when returns error message', () => {
      const errorMessage = 'test error message';
      const mockValidator = jest.fn().mockImplementation((_name) => errorMessage);
      const testInput = 'test input';
      let wrapper;

      beforeEach(() => {
        mockValidator.mockClear();
        wrapper = shallow(
          <TextField label="test label" validator={mockValidator} />,
        );
        wrapper.find('input').simulate('change', { target: { value: testInput } });
      });

      it('shows error message', () => {
        const error = wrapper.find('small#test_label-error');

        expect(error).to.exist;
        expect(error.text()).to.be.string(errorMessage);
      });
    });
  });
});
