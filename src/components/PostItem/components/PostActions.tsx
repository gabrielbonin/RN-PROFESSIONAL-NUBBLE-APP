import React from 'react';

import {Box, Icon, TouchableOpacityBox, Text, IconProps} from '@components';

export function PostActions() {
  function likePost() {}

  return (
    <Box>
      <Item onPress={likePost} iconName="heart" text="78" />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  iconName: IconProps['name'];
  text: string;
}

function Item({iconName, onPress, text}: ItemProps) {
  return (
    <Box flexDirection="row">
      <TouchableOpacityBox
        flexDirection="row"
        alignItems="center"
        onPress={onPress}>
        <Icon name={iconName} size={20} />
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      </TouchableOpacityBox>
    </Box>
  );
}
