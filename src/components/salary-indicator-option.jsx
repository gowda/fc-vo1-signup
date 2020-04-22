import React from 'react';
import PropTypes from 'prop-types';

export default function SalaryIndicatorOption({ label, checked, onChange }) {
  const id = label.toLowerCase().replace(/\s/g, '_');

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        id={id}
        name={`radio-${id}`}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label
        className="form-check-label"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

SalaryIndicatorOption.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

SalaryIndicatorOption.defaultProps = {
  checked: false,
};
