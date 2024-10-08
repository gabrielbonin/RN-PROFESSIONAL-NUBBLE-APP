/**
 * @description Adapta o PostCommentAPI para o modelo PostComment
 */

import {PostComment, PostCommentAPI} from './postCommentTypes';

function toPostComment(postCommentAPI: PostCommentAPI): PostComment {
  return {
    id: postCommentAPI.id,
    message: postCommentAPI.text,
    createdAt: postCommentAPI.created_at,
    author: {
      id: postCommentAPI.user.id,
      name: postCommentAPI.user.full_name,
      profileURL: postCommentAPI.user.profile_url,
      userName: postCommentAPI.user.username,
    },
  };
}

export const postCommentAdapter = {
  toPostComment,
};
