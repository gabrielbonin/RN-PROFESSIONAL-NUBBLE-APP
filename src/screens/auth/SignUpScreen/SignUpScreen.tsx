import React from 'react';

import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import TextInput from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';

import {PasswordInput} from '../../../components/PasswordIpunt/PasswordInput';
import {RootStackParamList} from '../../../routes/Routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {useForm, Controller} from 'react-hook-form';
import {FormTextInput} from '../../../components/Form/FormTextInput';

type SignUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<SignUpFormType>({
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(formValues: SignUpFormType) {
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
        rules={{
          required: 'Nome obrigatório',
        }}
        boxProps={{mb: 's20'}}
      />

      <Controller
        name="fullName"
        control={control}
        rules={{
          required: 'Nome obrigatório',
        }}
        render={({field: {onChange, value}, fieldState}) => (
          <TextInput
            label="Seu nome completo"
            placeholder="Digite seu nome completo"
            errorMessage={fieldState.error?.message}
            value={value}
            onChangeText={onChange}
            boxProps={{mb: 's20'}}
            autoCapitalize="words"
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Nome obrigatório',
        }}
        render={({field: {onChange, value}, fieldState}) => (
          <TextInput
            label="Seu E-mail"
            placeholder="Digite seu E-mail"
            boxProps={{mb: 's20'}}
            errorMessage={fieldState.error?.message}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: 'Nome obrigatório',
        }}
        render={({field: {onChange, value}, fieldState}) => (
          <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{mb: 's20'}}
            errorMessage={fieldState.error?.message}
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Button
        disabled={!formState.isValid}
        title="Criar conta"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
