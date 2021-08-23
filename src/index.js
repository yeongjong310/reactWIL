import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './app/App';

render(
  <StrictMode>
    <App />
    {/* <div className="test">tester</div> */}
  </StrictMode>,
  document.getElementById('root')
);