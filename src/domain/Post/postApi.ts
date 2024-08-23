import {PageAPI} from 'src/api/types';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Nw.JoCoyybhNddC4mK2jf3g0UI5lEHzwdKhPPRXPScI0HZqRCFMFXIUXmGB39V3',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();

  return data;
}

export const postApi = {
  getList,
};
