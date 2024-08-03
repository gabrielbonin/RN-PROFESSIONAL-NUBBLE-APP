import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  //simulate network request
  await new Promise(resolve => setTimeout(resolve, 3000));

  return postListMock;
}

export const postApi = {
  getList,
};
