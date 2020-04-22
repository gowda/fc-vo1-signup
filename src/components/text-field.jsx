import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextField({
  label, placeholder, helpText, validator, onChange,
}) {
  const id = label.replace(/\s/g, '_');
  const [error, setError] = useState(null);

  function validate(input) {
    const ret = validator(input);
    setError(ret);

    if (!ret) {
      onChange(input);
    }
  }

  return (
    <div className="form-group">
      <label htmlFor={id}>
        {label}
      </label>
      <input
        className="form-control"
        id={id}
        aria-describedby={`${id}-help`}
        placeholder={placeholder}
        onChange={(e) => validate(e.target.value)}
      />
      { helpText && (
      <small
        id={`${id}-help`}
        className="form-text text-muted"
      >
        {helpText}
      </small>
      )}
      { error && (
      <small
        id={`${id}-error`}
        className="form-text text-danger"
      >
        {error}
      </small>
      )}
    </div>
  );
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  validator: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  placeholder: 'Enter your input',
  helpText: null,
  validator: () => null,
};
