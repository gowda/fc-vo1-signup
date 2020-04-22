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
    <div className="flex-grow-1 d-flex flex-column flex-sm-row justify-content-center align-items-right align-items-sm-center">
      <div className="flex-sm-grow-1 flex-grow-0">
        {React.createElement(component, { value: updatedValue, onChange: handleChange })}
      </div>
      <button
        type="button"
        className="btn btn-success ml-2 mb-2 flex-sm-grow-5 flex-grow-0"
        onClick={handleButtonClick}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

FormManager.propTypes = {
  component: PropTypes.elementType.isRequired,
  value: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
