import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';

import {ThemeColors} from '@theme';
import {useAppTheme} from '@hooks';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  size?: 'small' | 'large';
  color: ThemeColors;
}

export function ActivityIndicator({color, size}: Props) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator size={size} color={colors[color]} />;
}
