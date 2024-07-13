import React from 'react';

import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '../../../components/Button/Button';

import {RootStackParamList} from '../../../routes/Routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {useForm} from 'react-hook-form';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordTextInput} from '../../../components/Form/FormPasswordInput';

import {SignUpSchema, signUpSchema} from './signUpSchema';
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(formValues: SignUpSchema) {
    console.log(formValues);
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

      <FormTextInput
        label="Seu username"
        control={control}
        name="username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        name="fullName"
        label="Seu nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
        autoCapitalize="words"
        control={control}
      />
      <FormTextInput
        name="email"
        control={control}
        label="Seu E-mail"
        placeholder="Digite seu E-mail"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordTextInput label="Senha" name="password" control={control} />

      <Button
        disabled={!formState.isValid}
        title="Criar conta"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
