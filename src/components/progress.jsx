import React from 'react';
import PropTypes from 'prop-types';

export default function Progress({ done }) {
  return (
    <div className="w-100 progress">
      <div
        className="progress-bar bg-info"
        role="progressbar"
        style={{ width: `${done * 100}%` }}
        aria-valuenow={done * 100}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}

Progress.propTypes = {
  done: PropTypes.number.isRequired,
};
