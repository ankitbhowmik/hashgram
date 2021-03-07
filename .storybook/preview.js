import React from 'react';
import '../src/css/global.css';
import '../src/css/reset.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

addDecorator((story) => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {story()}
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
));