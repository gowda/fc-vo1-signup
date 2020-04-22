import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import FullNameField from './fullname';
import TextField from './text-field';

describe('FullNameField', () => {
  it('renders the TextField', () => {
    const wrapper = shallow(<FullNameField />);
    const textField = wrapper.find(TextField);

    expect(textField).to.exist;
    expect(textField.props().label).to.be.string('Full name');
    expect(textField.props().placeholder).to.have.string('John Doe');
    expect(textField.props().helpText).to.have.string('Please enter');
  });
});
