import React, {type PropsWithChildren} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {Home} from './src/screens';
import theme from './src/styles/theme';

const App: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
