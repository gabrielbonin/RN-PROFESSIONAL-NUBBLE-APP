import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';

export function Button({children, onPress}) {
  const {} = useTheme<Theme>();
  return (
    <TouchableOpacity onPress={onPress}>
      <Text preset="button">{children}</Text>
    </TouchableOpacity>
  );
}
