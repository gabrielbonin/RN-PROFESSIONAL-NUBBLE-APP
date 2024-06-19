import React from 'react';

import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {TouchableOpacityBoxProps, TouchableOpacityBox} from '../Box/Box';
import {ActivityIndicator} from 'react-native';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({
  title,
  loading,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="greenPrimary"
      height={50}
      justifyContent="center"
      alignItems="center"
      paddingHorizontal="s24"
      borderRadius="s16"
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold color="primaryContrast">
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
