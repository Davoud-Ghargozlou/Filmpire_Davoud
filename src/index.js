/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable comma-dangle */
// eslint-disable-next-line linebreak-style
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './components/App';

const theme = createTheme({});

ReactDom.render(
  <ThemeProvider theme={theme}>

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </ThemeProvider>,
  document.getElementById('root')
);
