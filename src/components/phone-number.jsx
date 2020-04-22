import React from 'react';

export default (_props) => (
  <div className="form-group">
    <label htmlFor="phone-number">
      Phone number
    </label>
    <input
      type="phone"
      className="form-control"
      id="phone-number"
      aria-describedby="phone-number-help"
      placeholder="Enter email"
    />
    <small
      id="phone-number-help"
      className="form-text text-muted"
    >
      Please enter your phone number.
    </small>
  </div>
);
