import React from 'react';
import {Dimensions, Image} from 'react-native';

import {Post} from '@domain';

import {Box} from '@components';

import {PostActions} from './components/PostActions';
import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';

interface Props {
  post: Post;
}

export function PostItem({post}: Props) {
  return (
    <Box paddingHorizontal="s24" mb="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions />
    </Box>
  );
}
