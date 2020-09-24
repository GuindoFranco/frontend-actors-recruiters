import React from 'react';
import './fieldError.scss';

const fieldError = ({ children, visible }) => {

  const classes = visible ? 'uc-fieldError uc-fieldError__visible' : 'uc-fieldError';

  return (
      <h6 className={classes}>
        {children}
      </h6>
  )
};

export default fieldError;