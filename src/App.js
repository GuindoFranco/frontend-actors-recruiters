import React from 'react';

import Button from './ui-core/Button/button';
import Textbox from './ui-core/Textbox/textbox';

function App() {
  return (
    <div style={{ margin: '20px', width: '300px', position: 'relative', float: 'left' }}>
      <Button type='primary' onClicked={() => { console.log('clicked!'); }}>
        Login
      </Button>
      <Button type='success'>
        Login
      </Button>
      <Button type='danger'>
        Login
      </Button>
      <Button type='secondary'>
        Login
      </Button>
      <div>
        <Textbox
          placeholder='Enter a value' />
        <Textbox
          placeholder='Enter a value' />
        <Textbox
          placeholder='Enter a value' />
      </div>
    </div>
  );
}

export default App;
