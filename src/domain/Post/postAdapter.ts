/**
 * @description Adapta o PostAPI para o modelo Post
 */

import {Post, PostAPI} from './postTypes';

function toPost(postAPI: PostAPI): Post {
  return {
    id: postAPI.id.toString(),
    text: postAPI.text,
    author: {
      profileURL: postAPI.user.profile_url,
      name: postAPI.user.full_name,
      userName: postAPI.user.username,
    },
    imageURL: postAPI.image_url,
    reactionCount: parseInt(postAPI.meta.like_count.toString(), 10),
    commentCount: parseInt(postAPI.meta.comments_count.toString(), 10),
    favoriteCount: parseInt(postAPI.meta.favorite_count.toString(), 10),
  };
}

export const postAdapter = {
  toPost,
};
