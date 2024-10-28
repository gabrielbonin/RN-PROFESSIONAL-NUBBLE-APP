import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {usePostCommentList} from '@domain';
import {PostComment} from '@domain';

import {Box, Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {PostCommentBottom} from './components/PostCommentBottom';
import {PostCommentItem} from './components/PostCommentItem';
import {PostCommentTextMessage} from './components/PostCommentTextMessage';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const {postId} = route.params;
  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);
  const {bottom} = useAppSafeArea();

  console.log('list', list);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <Box mb="s20">
        <PostCommentItem postComment={item} />
      </Box>
    );
  }

  return (
    <Screen flex={1} canGoBack title="Comentários">
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          contentContainerStyle={{paddingBottom: bottom}}
          renderItem={renderItem}
          ListFooterComponent={
            <PostCommentBottom
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
        />
        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  );
}
