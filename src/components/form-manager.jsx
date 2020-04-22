import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function FormManager({
  component, value, buttonLabel, onChange,
}) {
  const [updatedValue, setUpdatedValue] = useState(value);

  function handleChange(changedValue) {
    setUpdatedValue(changedValue);
  }

  function handleButtonClick() {
    onChange(updatedValue);
  }

  return (
    <div className="row h-100 align-items-center justify-content-center">
      <div className="col-auto">
        {React.createElement(component, { value: updatedValue, onChange: handleChange })}
      </div>
      <div className="col">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleButtonClick}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

FormManager.propTypes = {
  component: PropTypes.elementType.isRequired,
  value: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
