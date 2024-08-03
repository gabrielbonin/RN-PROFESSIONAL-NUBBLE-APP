import {postApi} from './postApi';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  //simulate network request
  const postList = await postApi.getList();

  return postList;
}

export const postService = {
  getList,
};
