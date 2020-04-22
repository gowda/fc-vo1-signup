import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import PhoneNumberField from './phone-number';
import TextField from './text-field';

describe('Phone number', () => {
  it('renders the message', () => {
    const wrapper = shallow(<PhoneNumberField />);
    const textField = wrapper.find(TextField);

    expect(textField).to.exist;
    expect(textField.props().label).to.be.string('Phone number');
    expect(textField.props().placeholder).to.have.string('5432');
    expect(textField.props().helpText).to.have.string('Please enter');
  });
});
