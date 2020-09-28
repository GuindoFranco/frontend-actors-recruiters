import React from 'react';
import Texbox from '../Textbox/textbox';
import './input.scss';

const input = (props) => {
  let inputElement = null;

  console.log('props:', props);
  switch (props.inputtype) {
    case('input'):
      inputElement = <Texbox className = 'uc-input__element' {...props }/>
      break;
    case('textarea'):
      inputElement = <textarea className = 'uc-input__element' {...props }/>
      break;
    default: 
      inputElement = <input />
      break;
  };



  return(
    <div className='input'>
      { props.label  && <label className='uc-input__label'>{ props.label }</label>}
      { inputElement }
    </div>
  );

};

export default input;