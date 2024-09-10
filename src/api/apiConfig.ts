import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mw.SKmUsBxJQvDyjTRAK1O0tFOpPYzA4eXMp3vopeVmVW68ZLz3-6x8tUgQqAMM',
  },
});
