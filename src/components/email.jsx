import React from 'react';
import PropTypes from 'prop-types';

import TextField from './text-field';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function emailValidator(input) {
  if (input.length === 0 || EMAIL_REGEX.test(input)) {
    return null;
  }

  return 'Email address is not valid';
}

export default function EmailField({ onChange }) {
  return (
    <TextField
      label="Email"
      placeholder="Please enter your email address"
      helpText="Please enter your email address"
      validator={emailValidator}
      onChange={onChange}
    />
  );
}

EmailField.propTypes = {
  onChange: PropTypes.func.isRequired,
};
