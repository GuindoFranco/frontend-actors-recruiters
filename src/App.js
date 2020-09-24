import React from 'react';

import Button from './ui-core/Button/button';
import FieldError from './ui-core/FieldError/fieldError';
import Textbox from './ui-core/Textbox/textbox';

function App() {
  return (
    <div>

      <div style={{ margin: '100px', width: '300px', position: 'relative', float: 'left', textAlign: 'center' }}>
        <Textbox
          placeholder='Email/Username' showError errorMessage={'Enter an input'} />
        <Textbox
          placeholder='Password' showError errorMessage={'Enter a valid password'} />
        <Textbox
          placeholder='Confirm password' errorMessage={'Enter the same value'} />
        <Button type='primary' onClicked={() => { console.log('clicked!'); }}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default App;
