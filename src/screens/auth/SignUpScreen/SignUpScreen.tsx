import React from 'react';

import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import TextInput from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';

import {PasswordInput} from '../../../components/PasswordIpunt/PasswordInput';
import {RootStackParamList} from '../../../routes/Routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  function submitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {name: 'checkRound', color: 'success'},
    });
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <TextInput label="Seu username" placeholder="@" boxProps={{mb: 's20'}} />
      <TextInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label="Seu E-mail"
        placeholder="Digite seu E-mail"
        boxProps={{mb: 's20'}}
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's20'}}
      />
      <Button title="Criar conta" onPress={submitForm} />
    </Screen>
  );
}
