import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles } from 'styled/globalStyles';
import './styled/index.css';
import { theme } from 'styled/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Global styles={globalStyles} />
    </ThemeProvider>
  </React.StrictMode>
);
