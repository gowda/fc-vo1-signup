import React from 'react';
import PropTypes from 'prop-types';

export default function TextField({
  label, placeholder, helpText,
}) {
  const id = label.replace(/\s/g, '_');

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
      />
      { helpText && (
      <small
        id={`${id}-help`}
        className="form-text text-muted"
      >
        {helpText}
      </small>
      )}
    </div>
  );
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
};

TextField.defaultProps = {
  placeholder: 'Enter your input',
  helpText: null,
};
