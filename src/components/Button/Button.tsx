import React from 'react';

import {
  ActivityIndicator,
  TouchableOpacityBoxProps,
  TouchableOpacityBox,
} from '@components';

import {Text} from '../Text/Text';

import {buttonPresets} from './ButtonPresets';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  disabled,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      height={50}
      disabled={disabled || loading}
      justifyContent="center"
      alignItems="center"
      paddingHorizontal="s24"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
