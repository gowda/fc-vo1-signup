import React from 'react';
import PropTypes from 'prop-types';

export default function Summary({ values }) {
  return (
    <ul className="list-group list-group-flush">
      {values.map(({ label, value }) => (
        <li key={label} className="list-group-item">
          <span>
            {label}
            :
          </span>
          {' '}
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
