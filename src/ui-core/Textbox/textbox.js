import React from 'react';
import FieldError from '../FieldError/fieldError';
import './textbox.scss';

const textbox = ({ placeholder, enteredValue, onChangeHandler, showError, errorMessage }) => (
  <div className='uc-textbox'>
    <FieldError visible={showError}> {errorMessage} </FieldError>
    <input
      type='text'
      className='uc-textbox__input'
      placeholder={placeholder}
      value={enteredValue}
      onChange={onChangeHandler} />
  </div>
);

export default textbox;