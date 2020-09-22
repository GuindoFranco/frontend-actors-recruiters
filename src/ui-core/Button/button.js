import React from 'react';
import './button.scss';

const button = ({ children, type, onClicked }) => {
  return (
    <div className={`uc-button uc-button__${type}`} >
      <button onClick={onClicked}>
        {children}
      </button>
    </div>
  );
};

export default button;