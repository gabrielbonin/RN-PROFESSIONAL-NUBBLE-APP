import React from 'react';
import {Image} from 'react-native';

interface Props {
  url: string;
  /**  @default 32 */
  size?: number;
  /**  @default 14 */
  borderRadius?: number;
}

export function ProfileAvatar({url, borderRadius = 14, size = 32}: Props) {
  return (
    <Image
      source={{uri: url}}
      style={{width: size, height: size, borderRadius: borderRadius}}
    />
  );
}
