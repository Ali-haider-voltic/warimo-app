"use client"; // Add this if using the new `app` directory

import { ThemeProvider } from "styled-components";
import { Provider } from 'react-redux';
import './globals.css';
import { store } from './store/store';
import theme from "./styles/themeVariables"; // Adjust the path to your theme file
import GlobalStyle from "./styles/globalStyles"; // For global CSS styles (optional)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}

