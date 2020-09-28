import React from 'react';
import FieldError from '../FieldError/fieldError';
import './textbox.scss';

const textbox = ({ placeholder, enteredValue, onChangeHandler, showError, errorMessage, className }) => (
  <div className='uc-textbox'>
    <FieldError visible={showError}> {errorMessage} </FieldError>
    <input
      type='text'
      className= {`${className} uc-textbox__input`}
      placeholder={placeholder}
      value={enteredValue}
      onChange={onChangeHandler} />
  </div>
);

export default textbox;