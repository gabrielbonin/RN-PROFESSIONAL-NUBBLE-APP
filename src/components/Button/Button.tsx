import React from 'react';

import {Text} from '../Text/Text';

import {TouchableOpacityBoxProps, TouchableOpacityBox} from '../Box/Box';
import {ActivityIndicator} from 'react-native';
import {buttonPresets} from './ButtonPresets';

export type ButtonPreset = 'primary' | 'outline' | 'secondary';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset];
  return (
    <TouchableOpacityBox
      backgroundColor="greenPrimary"
      height={50}
      justifyContent="center"
      alignItems="center"
      paddingHorizontal="s24"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
