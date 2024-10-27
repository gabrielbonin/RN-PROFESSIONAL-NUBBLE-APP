import React from 'react';
import {Pressable} from 'react-native';

import {Box, Text} from '@components';

interface Props {
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export function PostCommentBottom({fetchNextPage, hasNextPage}: Props) {
  if (!hasNextPage) {
    return null;
  }

  return (
    <Box>
      <Pressable onPress={fetchNextPage}>
        <Text textAlign="center">Ver mais</Text>
      </Pressable>
    </Box>
  );
}
