import {api} from '@api';
import {PageAPI, PageParams} from 'src/api/types';

import {PostCommentAPI} from './postCommentTypes';

async function getList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> {
  const response = await api.get<PageAPI<PostCommentAPI>>('user/post_comment', {
    params: {
      post_id,
      ...pageParams,
    },
  });

  return response.data;
}

export const postCommentApi = {
  getList,
};
