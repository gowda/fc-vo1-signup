import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import EmailField from './email';
import TextField from './text-field';

describe('EmailField', () => {
  it('renders TextField', () => {
    const wrapper = shallow(<EmailField onChange={() => null} />);
    const textField = wrapper.find(TextField);

    expect(textField).to.exist;
    expect(textField.props().label).to.be.string('Email');
    expect(textField.props().placeholder).to.have.string('enter');
    expect(textField.props().helpText).to.have.string('Please enter');
  });
});
