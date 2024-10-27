import {usePaginatedList} from '@domain';

import {postCommentService} from '../postCommentService';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    console.log('getList', page);
    return postCommentService.getList(postId, page);
  }
  return usePaginatedList(getList);
}
