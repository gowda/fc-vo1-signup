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
});
