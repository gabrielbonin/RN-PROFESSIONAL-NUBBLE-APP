import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from './postCommentAdapter';
import {postCommentApi} from './postCommentApi';
import {PostComment} from './postCommentTypes';

const PER_PAGE = 5;

async function getList(
  post_id: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentPageApi = await postCommentApi.getList(post_id, {
    page,
    per_page: PER_PAGE,
  });

  return {
    data: postCommentPageApi.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentPageApi.meta),
  };
}

async function create(post_id: number, message: string): Promise<PostComment> {
  const postCommentAPI = await postCommentApi.create(post_id, message);

  return postCommentAdapter.toPostComment(postCommentAPI);
}

export const postCommentService = {
  getList,
  create,
};
