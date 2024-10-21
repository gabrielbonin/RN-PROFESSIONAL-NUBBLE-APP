import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'commentCount' | 'text' | 'author' | 'id'>;

export function PostBottom({commentCount, text, author, id}: Props) {
  const navigation = useNavigation();
  function navigateToPostComment() {
    navigation.navigate('PostCommentScreen', {
      postId: id,
    });
  }
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
          <Text
            preset="paragraphSmall"
            bold
            color="primary"
            onPress={navigateToPostComment}>
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
