import React from 'react';
import PropTypes from 'prop-types';

const STRINGS = [
  'hello',
  'hallo',
  'namaskara',
  'hola',
  'namaste',
  'aDDa bidde',
];

function randomString() {
  const index = Math.floor(Math.random() * STRINGS.length);
  return STRINGS[index];
}

export default function FormManager({ component, buttonLabel, onChange }) {
  return (
    <div className="row h-100 align-items-center justify-content-center">
      <div className="col-auto">
        {React.createElement(component)}
      </div>
      <div className="col">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => onChange(randomString())}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

FormManager.propTypes = {
  component: PropTypes.elementType.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
