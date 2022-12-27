import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from "./materialTheme";
import { AppContextProvider } from './context/AppContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
      </AppContextProvider>
    </BrowserRouter>  
  </React.StrictMode>
);
