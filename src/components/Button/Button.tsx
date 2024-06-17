import React from 'react';

import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {Box, TouchableOpacityBoxProps} from '../Box/Box';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({
  title,
  loading,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const {colors} = useTheme<Theme>();
  return (
    <Box
      backgroundColor="greenPrimary"
      height={50}
      justifyContent="center"
      paddingHorizontal="s24"
      alignItems="center"
      {...touchableOpacityBoxProps}>
      <Text preset="paragraphMedium" bold>
        {title}
      </Text>
    </Box>
  );
}
