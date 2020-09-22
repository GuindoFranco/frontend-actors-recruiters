import React from 'react';
import './textbox.scss';

const textbox = ({ placeholder, enteredValue, onChangeHandler }) => (
  <div className='uc-textbox'>
    <input
      type='text'
      className='uc-textbox__input'
      placeholder={placeholder}
      value={enteredValue}
      onChange={onChangeHandler}/>
  </div>
);

export default textbox;