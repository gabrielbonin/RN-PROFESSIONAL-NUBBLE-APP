import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';

import TextInput from './src/components/TextInput/TextInput';

import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';

import {IconComponent} from './src/components/Icon/Icon';

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
          <TextInput
            boxProps={{
              marginBottom: 's20',
            }}
            label="Login"
            placeholder="Digite seu e-mail"
          />
          <TextInput
            boxProps={{
              marginBottom: 's10',
            }}
            label="Senha"
            errorMessage="Mensagem de Erro"
            placeholder="Digite sua senha"
            rightComponent={<IconComponent name="eyeOff" color="gray2" />}
          />
          <Text color="primary" bold preset="paragraphSmall">
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
