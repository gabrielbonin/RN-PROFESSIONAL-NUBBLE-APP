import React from 'react';

import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';

import {PasswordInput, PasswordInputProps} from '@components';

export function FormPasswordTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, value}, fieldState}) => (
        <PasswordInput
          errorMessage={fieldState.error?.message}
          value={value}
          onChangeText={onChange}
          {...passwordInputProps}
        />
      )}
    />
  );
}
