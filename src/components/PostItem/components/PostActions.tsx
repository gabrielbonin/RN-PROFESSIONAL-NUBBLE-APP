import React from 'react';

import {Post} from '@domain';

import {Box, Icon, TouchableOpacityBox, Text, IconProps} from '@components';

type Props = Pick<Post, 'commentCount' | 'reactionCount' | 'favoriteCount'>;

export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: Props) {
  function likePost() {}

  function navigateToComments() {}

  function favoritePost() {}

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        onPress={likePost}
        marked
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        text={reactionCount}
      />
      <Item
        onPress={navigateToComments}
        marked={false}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        text={commentCount}
      />
      <Item
        onPress={favoritePost}
        marked
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
}

function Item({icon, onPress, text, marked}: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
        size={20}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
