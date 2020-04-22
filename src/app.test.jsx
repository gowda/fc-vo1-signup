import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './app';

import FormManager from './components/form-manager';

describe('App', () => {
  it('renders form manager', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(FormManager)).to.have.lengthOf(1);
  });
});
