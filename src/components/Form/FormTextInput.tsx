import React from 'react';
import {
  useForm,
  Controller,
  UseControllerProps,
  FieldValues,
} from 'react-hook-form';
import TextInput, {TextInputProps} from '../TextInput/TextInput';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, value}, fieldState}) => (
        <TextInput
          errorMessage={fieldState.error?.message}
          value={value}
          onChangeText={onChange}
          {...textInputProps}
        />
      )}
    />
  );
}
