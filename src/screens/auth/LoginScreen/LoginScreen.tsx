import React from 'react';
import {Text} from '../../../components/Text/Text';
import TextInput from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordIpunt/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

import {useForm, Controller} from 'react-hook-form';

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

  const {handleSubmit, control, formState} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginFormType) {}

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text marginBottom="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'e-mail obrigatório',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'e-mail inválido',
          },
        }}
        render={({field: {onChange, onBlur, value}, fieldState}) => (
          <TextInput
            boxProps={{
              marginBottom: 's20',
            }}
            label="Login"
            placeholder="Digite seu e-mail"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            errorMessage={fieldState.error?.message}
            autoCapitalize="none"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres',
          },
        }}
        render={({field: {onChange, onBlur, value}, fieldState}) => (
          <PasswordInput
            boxProps={{
              marginBottom: 's10',
            }}
            label="Senha"
            errorMessage={fieldState.error?.message}
            value={value}
            onChangeText={onChange}
            placeholder="Digite sua senha"
          />
        )}
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
