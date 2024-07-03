import React from 'react';
import {SafeAreaView} from 'react-native';
import {IconComponent} from '../../../components/Icon/Icon';
import {Box} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import TextInput from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordIpunt/PasswordInput';

export function LoginScreen() {
  return (
    <Screen>
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
      <PasswordInput
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
    </Screen>
  );
}
