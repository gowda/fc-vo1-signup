import React from 'react';
import PropTypes from 'prop-types';

import SalaryIndicatorOption from './salary-indicator-option';

const OPTIONS = [
  '0 - 1.000',
  '1.000 - 2.000',
  '2.000 - 3.000',
  '3.000 - 4.000',
  'More than 4.000',
];

export default function SalaryIndicator({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="salary-indicator">
        What is your monthly income?
      </label>
      <small
        id="salary-indicator-help"
        className="form-text text-muted"
      >
        Please which salaray range group your income belongs to.
      </small>

      {
      OPTIONS.map((option) => (
        <SalaryIndicatorOption
          key={option.replace(/\s/g, '_')}
          label={option}
          checked={value === option}
          onChange={() => onChange(option)}
        />
      ))
    }
    </div>
  );
}

SalaryIndicator.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
