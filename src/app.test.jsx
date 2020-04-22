import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './app';

import EmailField from './components/email';
import FullNameField from './components/fullname';
import PhoneNumberField from './components/phone-number';
import SalaryIndicator from './components/salary-indicator';

describe('App', () => {
  it('renders the message', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(FullNameField)).to.have.lengthOf(1);
    expect(wrapper.find(EmailField)).to.have.lengthOf(1);
    expect(wrapper.find(PhoneNumberField)).to.have.lengthOf(1);
    expect(wrapper.find(SalaryIndicator)).to.have.lengthOf(1);
  });
});
