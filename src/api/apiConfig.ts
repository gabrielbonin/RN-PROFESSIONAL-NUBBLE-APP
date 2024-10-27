import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.RSQGtD6RSj7eRxd6pppMr2Tgrac1ZYlscemFHJ4lI-uVaQ628dLEsgYzQ7Xv',
  },
});
