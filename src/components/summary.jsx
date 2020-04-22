import React from 'react';
import PropTypes from 'prop-types';

export default function Summary({ values }) {
  return (
    <ul className="w-100 d-flex flex-column justify-content-center align-items-center">
      {values.map(({ label, value }) => (
        <li key={label} className="w-100 d-flex flex-column flex-sm-row mb-sm-2 mb-4 justify-content-between">
          <span className="font-weight-lighter">
            {label}
          </span>
          <div>{value}</div>
        </li>
      ))}
    </ul>
  );
}

Summary.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
