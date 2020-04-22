import React from 'react';
import PropTypes from 'prop-types';

import TextField from './text-field';

export default function FullNameField({ onChange }) {
  return (
    <TextField
      label="Full name"
      placeholder="John Doe"
      helpText="Please enter your full name. First name followed by last name"
      onChange={onChange}
    />
  );
}

FullNameField.propTypes = {
  onChange: PropTypes.func.isRequired,
};
