import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Screen,
  Text,
  Button,
  FormTextInput,
  FormPasswordTextInput,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {SignUpSchema, signUpSchema} from './signUpSchema';

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
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
