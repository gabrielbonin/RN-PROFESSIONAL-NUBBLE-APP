import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';

import {Theme, ThemeColors} from '../../theme/theme';
import {useTheme} from '@shopify/restyle';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  size?: 'small' | 'large';
  color: ThemeColors;
}

export function ActivityIndicator({color, size}: Props) {
  const {colors} = useTheme<Theme>();

  return <RNActivityIndicator size={size} color={colors[color]} />;
}
