import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  let headersList = {
    Authorization:
      'Bearer Mw.2AtD-I0kv2ZWVmyN9fdMAPancS7r3oFpS-j8JDtKd1F1mb-pz2Bp7eBqIjBP',
  };

  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: headersList,
  });

  let data = await response.json();
  console.log('FETCH: ', data);

  // await new Promise(resolve => setTimeout(resolve, 3000));

  return postListMock;
}

export const postApi = {
  getList,
};
