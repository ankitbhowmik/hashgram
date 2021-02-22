import React from 'react';
import '../src/css/global.css';
import '../src/css/reset.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/theme';

addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
));