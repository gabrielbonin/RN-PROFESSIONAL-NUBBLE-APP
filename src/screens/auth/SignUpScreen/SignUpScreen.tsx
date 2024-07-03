import React from 'react';

import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import TextInput from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {IconComponent} from '../../../components/Icon/Icon';

export function SignUpScreen() {
  function submitForm() {
    console.log('submitForm');
  }
  return (
    <Screen>
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
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        rightComponent={<IconComponent color="gray2" name="eyeOn" />}
        boxProps={{mb: 's20'}}
      />
      <Button title="Criar conta" onPress={submitForm} />
    </Screen>
  );
}
