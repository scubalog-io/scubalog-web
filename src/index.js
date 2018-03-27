import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';

ReactDOM.render((
  <MuiThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
), document.getElementById('root'));
