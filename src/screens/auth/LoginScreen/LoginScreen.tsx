import React from 'react';
import {Text} from '../../../components/Text/Text';

import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {LoginSchema, loginSchema} from './loginSchema';
import {FormTextInput} from '../../../components/Form/FormTextInput';

type LoginFormType = {
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPassword');
  }

  const {handleSubmit, control, formState} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginFormType) {
    const data = {
      email,
      password,
    };
    console.log(data);
  }

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text marginBottom="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        autoCapitalize="none"
        name="email"
        label="Login"
        placeholder="Digite seu e-mail"
        boxProps={{
          marginBottom: 's20',
        }}
      />

      <FormTextInput
        control={control}
        name="password"
        boxProps={{
          marginBottom: 's10',
        }}
        label="Senha"
        placeholder="Digite sua senha"
      />

      <Text
        color="primary"
        bold
        preset="paragraphSmall"
        onPress={navigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>
      <Button
        disabled={!formState.isValid}
        title="Entrar"
        mt="s48"
        onPress={handleSubmit(submitForm)}
      />
      <Button
        preset="outline"
        title="Criar uma conta"
        mt="s12"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
