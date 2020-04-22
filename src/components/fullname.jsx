import React from 'react';

export default (_props) => (
  <div className="form-group">
    <label htmlFor="full-name">
      Full name
    </label>

    <input
      className="form-control"
      id="full-name"
      aria-describedby="full-name-help"
      placeholder="John Doe"
    />
    <small
      id="full-name-help"
      className="form-text text-muted"
    >
      Please enter your full name. First name followed by last name.
    </small>
  </div>
);
