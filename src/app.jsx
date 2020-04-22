import React from 'react';

import FullNameField from './components/fullname';
import EmailField from './components/email';
import PhoneNumberField from './components/phone-number';
import SalaryIndicatorField from './components/salary-indicator';

export default (_props) => (
  <div className="container h-100">
    <div className="row h-100 align-items-center justify-content-center">
      <div className="col-auto">
        <FullNameField />
        <EmailField />
        <PhoneNumberField />
        <SalaryIndicatorField />
        <button type="button" className="btn btn-success">Submit</button>
        {' '}
        <button type="button" className="btn btn-secondary">Reset</button>
      </div>
    </div>
  </div>
);
