import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';
import {EyeOnIcon} from './src/assets/icons/EyeOnIcon';
function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingSmall" color="carrotSecondary">
          CoffeStack
        </Text>
        <Button preset="primary" title="Press me" />
        <Button preset="outline" title="Press me" />

        <EyeOffIcon color="red" size={30} />
        <EyeOnIcon color="blue" size={30} />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
