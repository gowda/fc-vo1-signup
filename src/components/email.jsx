import React from 'react';

export default (_props) => (
  <div className="form-group">
    <label htmlFor="email">
      Email
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
      aria-describedby="email-help"
      placeholder="Enter email"
    />
    <small
      id="email-help"
      className="form-text text-muted"
    >
      Please enter your email address.
    </small>
  </div>
);
