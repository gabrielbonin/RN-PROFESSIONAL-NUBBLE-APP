import React from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import {Text} from './src/components/Text/Text';

import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text marginBottom="s8" preset="headingLarge">
            Olá!
          </Text>
          <Text marginBottom="s40" preset="paragraphLarge">
            Digite seu e-mail e senha para entrar
          </Text>
          <Box mb="s20">
            <TextInput
              placeholder="Digite seu e-mail"
              style={{borderWidth: 1, height: 50}}
            />
          </Box>
          <Box>
            <TextInput
              placeholder="Digite sua senha"
              style={{borderWidth: 1, height: 50}}
            />
          </Box>

          <Text color="primary" bold preset="paragraphSmall" mt="s10">
            Esqueci minha senha
          </Text>

          <Button title="Entrar" mt="s48" onPress={() => {}} />
          <Button
            preset="outline"
            title="Criar uma conta"
            mt="s12"
            onPress={() => {}}
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
