import React from 'react';
import TextField from './text-field';

const PHONE_NUMBER_REGEX = /\+?[0-9]{8,15}/;

function phoneNumberValidator(input) {
  if (input.length !== 0) {
    if (PHONE_NUMBER_REGEX.test(input)) {
      return null;
    }
    return 'Not a valid phone number';
  }

  return null;
}

export default (_props) => (
  <TextField
    label="Phone number"
    placeholder="+49 0152 0123 5432"
    helpText="Please enter your phone number"
    validator={phoneNumberValidator}
  />
);
