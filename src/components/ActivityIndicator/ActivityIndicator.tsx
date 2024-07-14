import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  size?: 'small' | 'large';
  color: ThemeColors;
}

export function ActivityIndicator({color, size}: Props) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator size={size} color={colors[color]} />;
}
