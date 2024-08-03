import React from 'react';

import {Post} from '@domain';

import {Box, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'commentCount' | 'text' | 'author'>;

export function PostBottom({commentCount, text, author}: Props) {
  const commentText = getCommentText(commentCount);
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text color="gray1" preset="paragraphMedium" semiBold>
        {text}
      </Text>
      <TouchableOpacityBox mt="s8">
        {commentCount > 0 && (
          <Text preset="paragraphSmall" bold color="primary">
            {commentText}
          </Text>
        )}
      </TouchableOpacityBox>
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}
