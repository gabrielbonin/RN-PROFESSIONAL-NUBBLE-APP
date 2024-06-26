import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {LoginScreen} from './src/screens/auth/LoginScreen/LoginScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <LoginScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
